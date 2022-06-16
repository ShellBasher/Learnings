SELECT COUNT(*) as nb FROM pokemon_form_generations
JOIN pokemon ON pokemon_form_generations.pokemon_form_id = pokemon.id
WHERE pokemon_form_generations.generation_id = 5;
