SELECT p.player_id, r.request_start, r.request_end FROM  stats s
 JOIN players p ON p.user_id = s.player_id
 JOIN products p ON p.product_id = r.product_id