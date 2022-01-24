import axios from "axios";
import { Dispatch } from "redux";
import {
  PokemonDispatchTypes,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
  POKEMON_LOADING,
} from "./PokemonActionTypes";

export const GetPokemon =
  (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({
        type: POKEMON_LOADING,
      });

      const res =
        pokemon === ""
          ? await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${Math.ceil(
                Math.random() * 898
              )}`
            )
          : await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

      dispatch({
        type: POKEMON_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POKEMON_FAIL,
      });
    }
  };
