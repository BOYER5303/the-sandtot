INSERT INTO users (name, email, password)
VALUES ($1, $2, $3);

SELECT * FROM users
WHERE email = $2;