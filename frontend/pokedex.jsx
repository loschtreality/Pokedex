import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {fetchSinglePokemon} from './util/api_util'
import {receiveSinglePokemon, requestSinglePokemon, REQUEST_SINGLE_POKEMON} from "./actions/pokemon_actions"


document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore()
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )

  window.requestSinglePokemon = requestSinglePokemon
  window.receiveSinglePokemon = receiveSinglePokemon
  window.fetchSinglePokemon = fetchSinglePokemon
  window.store = store

  //  store.dispatch(requestSinglePokemon()); //testing
})


// <Root store={store}/>
