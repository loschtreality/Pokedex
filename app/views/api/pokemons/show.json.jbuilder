json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

json.set! :items do
  json.array! @pokemon.items do |item|
    json.extract! item,:id, :name, :pokemon_id, :price, :happiness, :image_url
  end
end
