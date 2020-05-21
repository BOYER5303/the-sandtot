INSERT INTO players (jersey, last_name, first_name, position)
VALUES ($1, $2, $3, $4);

SELECT p.jersey, p.last_name, p.first_name, p.position FROM players p
ORDER BY p.jersey;