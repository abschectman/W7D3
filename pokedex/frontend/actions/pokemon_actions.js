import { fetchAllPokemon } from "../util/api-util";
import pokemonReducer from "../reducers/pokemon_reducer";
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const receiveAllPokemon = pokemon => {
  return(
    {
      type: RECEIVE_ALL_POKEMON,
      pokemon
    }
  )
}

export const requestAllPokemon = () => dispatch => {
  fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
}