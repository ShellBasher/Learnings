SELECT DISTINCT moves.identifier as Attaques FROM moves 
JOIN pokemon_moves ON moves.id = pokemon_moves.move_id
JOIN pokemon ON pokemon_moves.pokemon_id = pokemon.id
WHERE pokemon.identifier = "Feraligatr" AND moves.identifier = "Hydro-pump";