SELECT COUNT(*) as nb FROM pokemon_types
JOIN types ON pokemon_types.type_id = types.id
WHERE types.identifier IN ("ghost");
