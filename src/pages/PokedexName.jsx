import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./styles/PokedexName.css"
import Header from "../components/Header";
import Error from "../components/Error";

const PokedexName = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokenomByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokenomByName();
  }, [name]);
  


  return (
    <div>
     <Header />
      {hasError ? (
        <Error name={name}/>
      ) : (
        <article className="pokeN_data">
        <section className="pokeN_info">
          <header className={`pokeN_header bg_${pokemon?.types[0].type.name}`}>
          <img
            className="pokeN_img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          </header>
          <section className="pokeN_dataG">
          <h2 className={`pokeN_number ${pokemon?.types[0].type.name}`}>#{pokemon?.game_indices[3].game_index}</h2>
          <div className={`pokeN_name ${pokemon?.types[0].type.name}`}>
          
           <hr className="pkeN_hr" />
           <h2>{pokemon?.name}</h2>
            <hr className="pkeN_hr"/>
          
          </div>
          <ul className="pokeN_size">
            <li><span className="pokeN_size_label">Weight </span><span className="pokeN_size_value">{pokemon?.weight}</span></li>
            <li><span className="pokeN_size_label">Height </span><span className="pokeN_size_value">{pokemon?.height}</span></li>
          </ul>
          <section className="pokeN_type-abilities">
          <ul className="pokeN_type-abilities-items">
            <h3>Type</h3>
            <div className="pokeN_type-items">
            {pokemon?.types.map((typeInfo) => (
              <div key={typeInfo.type.url} className={`pokeN_type ${typeInfo.type.name}`}>
            <li className="pokeN_type-info">{typeInfo.type.name}</li>
            </div>
          ))}
            </div>
          </ul>
          <ul className="pokeN_type-abilities-items">
            <h3>Abilities</h3>
            <div className="pokeN_abilities-items">
            {pokemon?.abilities.map((abilitiesInfo) => (
            <li key={abilitiesInfo.ability.url} className="pokeN_ability">{abilitiesInfo.ability.name}</li>
          ))}
            </div>
          </ul>
          </section>
          <section className="pokeN_stats_container">
            <div className="pokeN_h">
            <h2 className="pokeN_stats">Stats <hr /></h2>
            <div className="pokeN_imgS">
              <img src="/img/PokeBall.png" alt="" />
            </div>
            </div>
            <ul className="pokeN_stats_list">
            {
              pokemon?.stats.map((statInfo)=>(
                <div  key={statInfo.stat.url}>
                <li className="pokeN_stats-item">
                  <span>{statInfo.stat.name} </span>
                <span>{statInfo.base_stat}/200</span>
                </li>
                <div className="pokeN_bar">
                  <div className="pokeN_percent" style={{
                    width:`calc(${statInfo.base_stat}*0.5%)`,
                  }}></div>
                </div>
                </div>
              ))
            }
            </ul>
            </section>
          </section>

          </section>
          <section className="poneN_movements-container">
          <div className="pokeN_h">
            <h2 className="pokeN_stats">Movements <hr /></h2>
           
            </div>
            <ul className="pokeN_moves">
              {
                pokemon?.moves.map((moveInfo)=>(
                  <li className="pokeN_moves-item" key={moveInfo.move.url}>{moveInfo.move.name}</li>
                ))
              }
            </ul>
          </section>
        </article>
      )}
    </div>
  );
};

export default PokedexName;
