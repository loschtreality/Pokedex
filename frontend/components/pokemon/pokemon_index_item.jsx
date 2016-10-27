import React from 'react'
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {
  const handleClick = url => e => props.router.push(url);

  return (
    <li
      className="pokemon-index-item"
      onClick={handleClick(`/pokemons/${props.pokemon.id}`)}>
      {props.pokemon.id}
      <img src={props.pokemon.image_url} className="index_img"></img>
      {props.pokemon.name}
    </li>
  );
}

export default withRouter(PokemonIndexItem);
