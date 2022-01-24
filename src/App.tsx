import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "./actions/PokemonActions";
import { RootStore } from "./Store";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const [pokemon, setPokemon] = useState("");
  const handleSearch = () => dispatch(GetPokemon(pokemon));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemon(event.target.value);
  const sortArray = (array: any, a: any, b: any): any => {
    [array[a], array[b]] = [array[b], array[a]];
  };

  console.log("pokemon state:", pokemonState);

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="container-container">
        <h1 style={{ marginTop: 6 }}>Pokédex</h1>
        <input type={"text"} onChange={handleChange} />
        <button onClick={handleSearch}>Search Pokémon</button>
        <div>
          {pokemonState.pokemon ? (
            <div className="poke-container">
              <h2 className="poke-name">{pokemonState.pokemon?.name}</h2>
              <img src={pokemonState?.pokemon?.sprites?.front_default} alt="" />
              <p style={{ marginTop: 0, marginBottom: 0 }}>
                <small>Pokédex No. {pokemonState.pokemon?.id}</small>
              </p>
              <p style={{ marginTop: 0, marginBottom: 0 }}>
                <small>
                  Height: {pokemonState.pokemon.height} • Weight:{" "}
                  {pokemonState.pokemon.weight}
                </small>
              </p>
              {pokemonState.pokemon?.types?.length > 1 ? (
                <p className="poke-type">
                  Types:{" "}
                  {pokemonState.pokemon?.types?.map((type, index) => {
                    if (index === 0) {
                      return `${type.type.name}, `;
                    } else {
                      return `${type.type.name} `;
                    }
                  })}
                </p>
              ) : (
                <p className="poke-type">
                  Type:{" "}
                  {pokemonState.pokemon?.types?.map((type) => {
                    return `${type.type.name} `;
                  })}
                </p>
              )}
              <div className="poke-abilities">
                {pokemonState.pokemon?.abilities?.map((ability, index) => {
                  return (
                    <p className="poke-ability">
                      Ability {index + 1}:<br /> {ability.ability.name}
                    </p>
                  );
                })}
              </div>
              <p style={{ margin: 0 }}>Base Stats:</p>
              <div className="poke-stats">
                {pokemonState?.pokemon?.stats.map((stat: any) => {
                  return (
                    <p className="poke-stat">
                      <small>{`${stat?.stat?.name}: ${stat?.base_stat} `}</small>
                    </p>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
