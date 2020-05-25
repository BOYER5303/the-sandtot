DELETE FROM stats 
WHERE player_id = $1;

DELETE FROM players
WHERE player_id = $1;

SELECT p.jersey, p.last_name, p.first_name, p.position FROM players p
ORDER BY p.jersey;