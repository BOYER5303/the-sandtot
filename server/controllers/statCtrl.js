module.exports = {
    getHomeruns: async (req, res) => {
        try {
            
            const db = req.app.get('db')
            const hrLeaders = await db.stats.hr_leaders()
            res.status(200).send(hrLeaders)
            // }
        } catch (error) {
            console.log('Error getting Homeruns.', error)
            res.status(500).send(error)
        }
    },
    getWalks: async (req, res) => {
        try {
            
            const db = req.app.get('db')
            const walksLeaders = await db.stats.walks_leaders()
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
            const sbLeaders = await db.stats.sb_leaders()
            res.status(200).send(sbLeaders)
            // }
        } catch (error) {
            console.log('Error getting stolen bases.', error)
            res.status(500).send(error)
        }
    },
    getHits: async (req, res) => {
        try {
            
            const db = req.app.get('db')
            const hitsLeaders = await db.stats.hits_leaders()
            res.status(200).send(hitsLeaders)
            // }
        } catch (error) {
            console.log('Error getting hits.', error)
            res.status(500).send(error)
        }
    },



    createProduct: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {category, product, img, note} = req.body
            const newProduct = await db.products.create_product([category, product, img, note])
            res.status(200).send(newProduct)
        } catch (error) {
            console.log('Product creation error.', error)
            res.status(500).send(error)
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
        
            const products = await db.products.delete_product(id) 
            res.status(200).send(products)
        } catch (error) {
            console.log('Product deletion error.', error)
            res.status(500).send(error)
        }
    },
    updateNote: async (req, res) => {
        //try {
            const db = req.app.get('db')
            const {id} = req.params
            const {note} = req.body
            const noteContents = await db.products.update_note( [note, id])
            res.status(200).send(noteContents)
       // } catch (error){
            // console.log('Note change error')
            // res.status(500).send(error)
      //  }
    }
}