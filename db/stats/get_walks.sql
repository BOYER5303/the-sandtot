SELECT p.player_id, p.jersey, p.first_name, p.last_name, sum AS walks FROM players p 
LEFT OUTER JOIN 
(SELECT player_id, SUM(walk) FROM stats GROUP BY player_id) AS s 
            ON p.player_id = s.player_id
            ORDER BY walks ASC
            LIMIT 5;