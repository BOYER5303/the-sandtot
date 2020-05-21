module.exports = {
    getPlayers: async (req, res) => {
        
        
        try {
            
            
            const db = req.app.get('db')
            const allPlayers = await db.players.get_players()
            res.status(200).send(allPlayers)
            // }
        } catch (error) {
            console.log('Error getting players.', error)
            res.status(500).send(error)
        }
    },

    deletePlayer: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
        
            const player = await db.players.delete_player(id) 
            res.status(200).send(player)
        } catch (error) {
            console.log('Player deletion error.', error)
            res.status(500).send(error)
        }
    },
    addPlayer: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {jersey, last_name, first_name, position} = req.body
            const newPlayer = await db.players.add_player([jersey, last_name, first_name, position])
            res.status(200).send(newPlayer)
        } catch (error) {
            console.log('Player creation error.', error)
            res.status(500).send(error)
        }
    }
}
