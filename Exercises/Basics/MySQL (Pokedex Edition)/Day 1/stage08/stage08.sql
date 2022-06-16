SELECT stats.identifier as nom_stat, 
       pokemon_stats.base_stat as nb 
FROM stats 
JOIN pokemon_stats ON stats.id = pokemon_stats.stat_id
WHERE pokemon_stats.pokemon_id = 150;