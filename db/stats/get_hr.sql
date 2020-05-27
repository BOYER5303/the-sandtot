-- SELECT s.hr, p.player_id, p.jersey, p.first_name, p.last_name  FROM  players p
--  JOIN stats s ON s.player_id = p.player_id
--  ORDER BY s.hr ASC
--  LIMIT 5;

SELECT p.player_id, p.jersey, p.first_name, p.last_name, sum AS homeruns FROM players p 
LEFT OUTER JOIN 
(SELECT player_id, SUM(hr) FROM stats GROUP BY player_id) AS s 
            ON p.player_id = s.player_id
            ORDER BY homeruns ASC
            LIMIT 5;
 
--  SELECT p.player_id, p.jersey, p.first_name, p.last_name, SUM (s.hr) AS homeruns FROM  players p  
--  JOIN stats s ON s.player_id = p.player_id 
--   ORDER BY homeruns ASC  
--   LIMIT 5;