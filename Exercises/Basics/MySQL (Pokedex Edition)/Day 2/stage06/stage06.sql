SELECT types.identifier as type
       FROM pokemon_types
       JOIN pokemon ON pokemon_types.pokemon_id = pokemon.id
       JOIN types ON pokemon_types.type_id = types.id
       WHERE pokemon.identifier IN ("dodrio");
