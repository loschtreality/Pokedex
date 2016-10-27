import React from 'react'
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({ allPokemon }) => {
  return (
    <section className="pokedex">
      <ul>
          {allPokemon.map(poke => (
              <PokemonIndexItem key={poke.id} pokemon={poke} />
          ))}
      </ul>
    </section>
  )
}

export default PokemonIndex
