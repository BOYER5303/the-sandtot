CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name TEXT(24),
    email VARCHAR(42),
    hashed_password TEXT,
);

CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    jersey INT(2),
    last_name TEXT(24),
    first_name TEXT(24),
    position TEXT(2),
);

CREATE TABLE stats(
    stat_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players(player_id),
    hr INT,
    single INT,
    double INT,
    triple INT,
    strikeout INT,
    walk INT,
    stolen INT,
    out INT
);

INSERT INTO players (jersey, last_name, first_name, position)
VALUES
('21', 'Boyer', 'Jason', 'SS' ),
('23', 'H', 'Raxa', 'LF' ),
('12', 'C', 'Marco', '3B' ),
('7', 'R', 'Cameron', '2B' ),
('15', 'H', 'Monica', 'LF' ),
('42', 'H', 'Corey', 'C' ),
('33', 'L', 'Derek', '1B' ),
('1', 'H', 'Riley', 'P' ),
('5', 'F', 'Cole', 'RF' );