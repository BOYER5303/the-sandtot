module.exports = {
    getPlayers: async (req, res) => {
        
        
        try {
            
            
            const db = req.app.get('db')
            // if (req.session.user){
            //     //const {product_id}= req.session.user
            const allPlayers = await db.players.get_players()
            res.status(200).send(allPlayers)
            // }
        } catch (error) {
            console.log('Error getting players.', error)
            res.status(500).send(error)
        }
    }
}