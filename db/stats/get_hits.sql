SELECT SUM(single + double + hr + triple) FROM stats
WHERE player_id = $1;