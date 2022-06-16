SELECT COUNT(*) as nb 
FROM pokemon_types 
JOIN types ON types.id = pokemon_types.type_id 
WHERE types.identifier = "ice";