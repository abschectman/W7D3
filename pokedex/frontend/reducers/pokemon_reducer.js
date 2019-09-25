import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions'
import { fetchAllPokemon } from '../util/api-util'

  const pokemonReducer = (state = {}, action) => {
     switch (action.type) {
       case RECEIVE_ALL_POKEMON: {
         let newState = Object.assign({}, action.pokemon)
         return newState;
       } 
       default:
         return state; 
     }

  }

  export default pokemonReducer;