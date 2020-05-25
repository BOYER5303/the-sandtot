UPDATE players
SET position = $1 WHERE player_id = $2;

SELECT p.jersey, p.last_name, p.first_name, p.position FROM players p
ORDER BY p.jersey;
