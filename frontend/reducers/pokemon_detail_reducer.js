import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      console.log("Single pokemon reduced in pokemon_detail_reducer");
      return merge({}, state, action.pokemon)
    default:
      return state;
  }
}
