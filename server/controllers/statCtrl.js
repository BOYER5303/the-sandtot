module.exports = {
    addStat: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {player_id, hr, single, double, triple, strikeout, walk, stolen, out} = req.body
            const newRequest = await db.stats.add_stat([player_id, hr, single, double, triple, strikeout, walk, stolen, out])
            res.status(200).send(newRequest)
        } catch (error) {
            console.log('Server error creating stat.', error)
            res.status(500).send(error)
        }
    },
    getHrs: async (req, res) => {
        try {
            
            const db = req.app.get('db')
            const newHr = await db.stats.get_hr()
            res.status(200).send(newHr)
            // }
        } catch (error) {
            console.log('Error getting Homeruns.', error)
            res.status(500).send(error)
        }
    },
    getWalks: async (req, res) => {
        try {
            
            const db = req.app.get('db')
            const walksLeaders = await db.stats.get_walks()
            res.status(200).send(walksLeaders)
            // }
        } catch (error) {
            console.log('Error getting walks.', error)
            res.status(500).send(error)
        }
    },
    getSb: async (req, res) => {
        try {
            
            const db = req.app.get('db')
            const sbLeaders = await db.stats.get_sbs()
            res.status(200).send(sbLeaders)
            // }
        } catch (error) {
            console.log('Error getting stolen bases.', error)
            res.status(500).send(error)
        }
    },
    getHits: async (req, res) => {
        try {
            const {player_id} = req.body
            const db = req.app.get('db')
            const allHits = await db.stats.get_hits([player_id])
            res.status(200).send(allHits)
            // }
        } catch (error) {
            console.log('Error getting hits.', error)
            res.status(500).send(error)
        }
    },



    
    }