SELECT moves.identifier as Attaques
       CASE
		WHEN Attaques = "hydro-pump" THEN "oui"
		ELSE "non"
	END
FROM pokemon_moves
JOIN pokemon ON pokemon_moves.pokemon_id = pokemon.id
JOIN moves ON pokemon_moves.move_id = moves.id
WHERE pokemon.identifier IN ("dragonite");
