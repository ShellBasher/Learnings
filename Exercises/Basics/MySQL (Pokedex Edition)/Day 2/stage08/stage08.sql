SELECT stats.identifier as nom_stat,
       pokemon_stats.base_stat as nb
FROM pokemon_stats
JOIN pokemon ON pokemon_stats.pokemon_id = pokemon.id
JOIN stats ON pokemon_stats.stat_id = stats.id
WHERE pokemon.identifier IN ("moltres");
