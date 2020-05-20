THE SANDTOT (and brauts)

Add little league batting stats in real-time. Render top five players in important stat areas.  Some random chatroom focused on everything brautwurst.

MVP:
Users have personal accounts.
Multiple stats in DB.
Ability to add a player to team.
Ability to update a stat from input.
Ability to delete a player.
Render top 5 leaders in important stats.
Random chatroom about brautwurst recipes.

ICEBOX:


DATABASE
Tables:
users, players, stats

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name TEXT(24),
    email VARCHAR(42),
    hashed_password TEXT,
);

CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    team TEXT(24),
    first_name TEXT(24),
    last_name TEXT(24),
    position TEXT(2),
    jersey INT(2)
);

CREATE TABLE stats(
    stat_id SERIAL PRIMARY KEY,
    player_id INT REF players(player_id),
    hr INT,
    single INT,
    double INT,
    triple INT,
    strike_out INT,
    walk INT,
    stolen_base INT,
    hbp INT
);

SERVER
Dependencies:
massive
express
dotenv
express-session
bcrypt
chartjs
? chatroom

Endpoints:

authCtrl:
login: /auth/login
register: /auth/register
logout: /auth/logout
userSession: /auth/user_session

playerCtrl:
(app.get)getPlayers: /api/get_players
(app.post)addPlayer: /api/add_player
(app.delete) deletePlayer: /api/delete_player/:id
 
 statCtrl:
 (app.get)getStats: /api/get_stats
 ??? individual stats gets???
 (app.post)addStat: /api/add_stat
 (app.put)updateStat: /api/update_stat

 chatCtrl:
 ????

CLIENT
Dependencies:
axios
redux
react-redux
redux-promise-middleware
react-router-dom

File Structure:
src/
    App.js
    App.css
    reset.css
    index.js
    COMPONENTS
        Header.js/.css
        Footer.js/.css
        Team.js/.css
        Login.js/.css
        AddPlayer.js/.css
        StatDisplay.js/.css
        Chatroom.js/.css
        
    REDUX
        Store.js
        reducer.js

Routes:
login: /login
main: /
team: /team/:id
statDisplay: /stats
chatroom: /chatroom


