const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authCtrl')
const playerCtrl = require ('./controllers/playerCtrl')
const statCtrl = require('./controllers/statCtrl')
const app = express()
const server = require("http").Server(app);
const io = require("socket.io")(server);
require('dotenv').config()

const {SERVER_PORT, CHAT_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Massive db connected')
}).catch(error => console.log('db connection error', error))
 
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

//authentication end points
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/current', authCtrl.getUser)

//players
app.get('/api/players', playerCtrl.getPlayers)
app.post('/api/players', playerCtrl.addPlayer)
app.delete('/api/players/:id', playerCtrl.deletePlayer)
app.put('/api/players/:id', playerCtrl.updatePosition)


//stats
app.get('/stats/hr', statCtrl.getHrs)
app.get('/stats/walks', statCtrl.getWalks)
app.get('/stats/sb', statCtrl.getSb)
app.get('/stats/hits', statCtrl.getHits)
app.post('/api/stats', statCtrl.addStat)

//socket chat
io.on("connection", socket => {
    const { id } = socket.client;
    console.log(`User Connected: ${id}`);
    socket.on("chat message", ({ nickname, msg }) => {
      io.emit("chat message", { nickname, msg });
    });
  });

  //const PORT = process.env.PORT || 5001;
server.listen(CHAT_PORT, () => console.log(`Chat listening on port ${CHAT_PORT}`));
  


app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))