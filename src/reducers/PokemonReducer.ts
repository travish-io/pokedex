import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "../actions/PokemonActionTypes";

interface DefaultStateInterface {
  loading: boolean;
  pokemon: PokemonType | undefined;
}

const defaultState: DefaultStateInterface = {
  loading: false,
  pokemon: undefined,
};

const PokemonReducer = (
  state: DefaultStateInterface = defaultState,
  action: PokemonDispatchTypes
): DefaultStateInterface => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
        pokemon: undefined,
      };
    case POKEMON_LOADING:
      return {
        loading: true,
        pokemon: undefined,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
