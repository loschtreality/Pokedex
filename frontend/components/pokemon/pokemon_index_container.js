import {selectAllPokemon} from '../../reducers/selectors';
import {connect} from 'react-redux'
import PokemonIndex from './pokemon_index'

const mapStateToProps = state => ({
  allPokemon: selectAllPokemon(state)
});

export default connect(
  mapStateToProps
)(PokemonIndex);
