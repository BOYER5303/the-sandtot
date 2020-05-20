import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card.js'
import {Link, Redirect} from 'react-router-dom'
//import './Dash.css'

// import {connect} from 'react-redux'
// import {logout} from '../../Redux/reducers/user'

class Teams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            players: [],
        }
        this.getPlayers = this.getPlayers.bind(this)
        //this.deleteProduct = this.deleteProduct.bind(this)
        
    } 

    componentDidMount() {
        this.getPlayers()
        //this.updateNote()
    }

    getPlayers = () => {
        axios.get('/api/players')
        .then(({data}) => {
            this.setState({
                players: data
            })
            console.log(data)
        }).catch(err => console.log('Error getting player', err))
    }
    
    // deleteProduct = id => {
    //     //let product_id = id
    //     axios.delete(`/api/products/${id}`)
    //         .then(({data}) => {
    //             this.setState({
    //                 products: data
    //             })
    //         })
    //         .catch(error => {
    //             console.log('error deleting', error)
    //         })
    // }


    // handleLogout = () => {
    //     this.props.logout()
    //         .then(({data}) => {
    //             this.setState({
    //                 user: data,
    //                 redirect: true
    //             })
    //         })
    //         .catch(error => {
    //             console.log('error logging out', error)
    //         })
    // }


    render() {
        console.log(this.state.players)
        let {redirect} = this.state
        //let {category, product, img} = this.props

        if (redirect) {
            return <Redirect to='/'/>
        }
        
        const mappedPlayers = this.state.players.map(item =>
    
            <Card item={item}
            key={item.player_id}
            player_id= {item.player_id}
            last_name={item.last_name}
            first_name={item.first_name}
            jersey={item.jersey}
            position={item.position}
            getPlayers = {this.getPlayers}
            />
            // updateNote={this.updateNote}
            // handleChange={this.handleChange}
            
            // <Card
            // key={product.product_id}
            // category={category}
            // product={product}
            // img={img}/>
                ) 
        return (
            
                    <div className='dash-main'>     
                        <div>
                                    <Link to='/form' className='link'><button>add p</button></Link>

                        </div>
                        <section>
                            {mappedPlayers}
                        </section>
                    </div>
                
        )
    
}}

// const mapStateToProps = state => {
//     let {data: user} = state.user
//     return {user}
// }

// const mapDispatchToProps = {logout}

export default Teams //connect(mapStateToProps, mapDispatchToProps)(Dash)