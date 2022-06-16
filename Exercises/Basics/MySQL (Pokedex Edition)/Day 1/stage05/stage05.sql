SELECT identifier as attaque FROM moves 
JOIN pokemon_moves ON moves.id = pokemon_moves.move_id 
WHERE pokemon_id IN (143) LIMIT 5;
