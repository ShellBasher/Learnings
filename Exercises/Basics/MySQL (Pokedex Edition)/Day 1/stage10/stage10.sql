SELECT DISTINCT egg_groups.identifier as TypeOeuf FROM egg_groups 
JOIN pokemon_egg_groups ON egg_groups.id = pokemon_egg_groups.egg_group_id
JOIN pokemon ON pokemon_egg_groups.species_id = pokemon.id
WHERE pokemon.identifier = "Noctowl";