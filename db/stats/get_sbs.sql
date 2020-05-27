SELECT p.player_id, p.jersey, p.first_name, p.last_name, sum AS stolen_bases FROM players p 
LEFT OUTER JOIN 
(SELECT player_id, SUM(stolen) FROM stats GROUP BY player_id) AS s 
            ON p.player_id = s.player_id
            ORDER BY stolen_bases ASC
            LIMIT 5;