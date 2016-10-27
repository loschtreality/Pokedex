import React from 'react'

const PokemonDetail = (props) => {
  return (
    <div>
      <img src={props.image_url}></img>
      <ul>
        <li><h2>{props.name}</h2></li>
        <li><h4>{props.type}</h4></li>
        <li><h4>{props.attack}</h4></li>
        <li><h4>{props.defense}</h4></li>
        <li><h4>{props.moves}</h4></li>
      </ul>
    </div>
  )
}

export default PokemonDetail
