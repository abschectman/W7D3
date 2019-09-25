import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from "../frontend/actions/pokemon_actions"
import {fetchAllPokemon} from "../frontend/util/api-util"
import configureStore from './store/store'
import { requestAllPokemon } from '../frontend/actions/pokemon_actions'

window.receiveAllPokemon = receiveAllPokemon
window.fetchAllPokemon = fetchAllPokemon

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  window.requestAllPokemon = requestAllPokemon; 
  ReactDOM.render(<h1>yooooo</h1>, document.getElementById('root'))
})