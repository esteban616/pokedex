/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./styles/Pokecard.css"

const PokeCard = ({ url }) => {
  const [pokemon, getPokemon] = useFetch(url);
  useEffect(() => {
    getPokemon();
  }, []);

  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate(`/pokedex/${pokemon?.name}`)
  } 

  return (
    <article className={`pokecard ${pokemon?.types[0].type.name}`} onClick={handleNavigate}>
      <header className={`pokecard_header bg_${pokemon?.types[0].type.name}`}>
        <img className={`pokecard_img`}
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className="pokecard_body">
        <h3 className="pokecard_name">{pokemon?.name}</h3>
        <ul className="pokecard_types">
          {pokemon?.types.map((typeInfo) => (
            <li className="pokecard_types_item" key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>
      </section>
      <footer className="pokecard_footer">
        <ul className="pokecard_stats">
          {
            pokemon?.stats.map(statInfo=>(
              <li className="pokecard_stats_item" key={statInfo.stat.url}>
                <span className="pokecard_stats_label">{statInfo.stat.name} </span>
                <span className="pokecard_stats_value">{statInfo.base_stat}</span>
                </li>
            ))
          }
        </ul>
      </footer>
    </article>
  );
};

export default PokeCard;
