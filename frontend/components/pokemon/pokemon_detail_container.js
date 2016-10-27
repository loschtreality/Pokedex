import {requestSinglePokemon} from '../../actions/pokemon_actions'
import {connect} from 'react-redux'
import PokemonDetail from './pokemon_detail'

const mapStateToProps = state => ({
  details: state.detail
});

const mapDispatchToProps = (dispatch) => ({
  getSingle: id => dispatch(requestSinglePokemon(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
