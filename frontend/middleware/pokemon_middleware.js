import {fetchAllPokemon, fetchSinglePokemon} from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_SINGLE_POKEMON, receiveSinglePokemon } from '../actions/pokemon_actions';

export const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveSinglePokemonSuccess = data => dispatch(receiveSinglePokemon(data));

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
       fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_SINGLE_POKEMON:
        console.log("middleware hit for single in pokemon_middleware");
        console.log(action, "action in middleware");
        debugger;
        fetchSinglePokemon(action.id, receiveSinglePokemonSuccess)
        return next(action)
      break;
    default:
      return next(action);
  }
}
