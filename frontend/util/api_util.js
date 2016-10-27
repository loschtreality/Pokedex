export const fetchAllPokemon = (success,error) => {
  $.ajax({
    url: "/api/pokemons",
    success,
    error
  })
}


export const fetchSinglePokemon = (id, success, error) => {
  $.ajax({
    url: `/api/pokemons/${id}`,
    success,
    error
  })
}
