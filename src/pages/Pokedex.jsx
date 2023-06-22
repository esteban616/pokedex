import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Pokedex.css"
import Header from "../components/Header";
import { Loading } from "../components/Pokedex/Loading";

const Pokedex = () => {
  const [selectValue, setSelectValue] = useState("all-pokemons")
 


  let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  
  const trainerName = useSelector((states) => states.trainerName);
  
  const [pokemons, getAllPokemons,hasError,setPokemons] = useFetch(url);
  const urlType = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(urlType);

  useEffect(() => {
    if (selectValue === "all-pokemons") {
      getAllPokemons()
    }else{
      axios.get(selectValue)
      .then(res=>{
        const data ={
          results:res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
        }
        setPokemons(data)
      })
      .catch(err => console.log(err,hasError))
    }
  }, [selectValue])
  
  useEffect(() => {
    getAllTypes();
  }, []);
  const searchPokemon = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };
  const handleChangeType =(e)=>{
    setSelectValue(e.target.value)
  }

  return (
    <div>
    <Header />
      
      <p className="pokedex_welcome">
       Welcome <span> {trainerName}!</span>, you can find your favorite pokemon
      </p>
      <div className="pokedex_options">
      <form  className="pokedex_form" onSubmit={handleSubmit}>
        <input className="pokedex_imput" ref={searchPokemon} type="text" placeholder="Pokemon Name"/>
        <button className="pokedex_btn">Search</button>
      </form>
      <select className="pokedex_select"  onChange={handleChangeType}>
        <option className="pokedex_option" value="all-pokemons">All pokemons</option>
        {types?.results.map(typeInfo => (
          <option className="pokedex_option" value={typeInfo.url} key={typeInfo.url}>
            {typeInfo.name}
          </option>
        ))}
      </select>
      
      </div>
      {
        pokemons?
      <PokeContainer pokemons={pokemons?.results} />
      :
      <div className="loading_container">
      <Loading />
      </div>
      }
    </div>
  );
};

export default Pokedex;
