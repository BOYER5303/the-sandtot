SELECT p.player_id, p.first_name, p.product, u.user_id, u.name, u.address, r.request_start, r.request_end FROM  requests r
 JOIN players p ON p.user_id = s.player_id
 JOIN products p ON p.product_id = r.product_id