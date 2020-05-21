import React, {Component} from 'react'
//import './Dash.css'
import axios from 'axios'
//import Input from './Input'
import ReactTable from 'react-table'

class Card extends Component {
    constructor(props){
        super(props)

        this.state = {
            jersey: '',
            last_name: '',
            first_name: '',
            position: ''

        }
    }
    componentDidMount() {
        axios.get('/api/players')
            .then(({data}) => {
                this.setState({
                    players: data
                })
            })
            .catch(error => {
                console.log('Error getting players', error)
            })
    }

 
 
render(){
    const { jersey, last_name, first_name, position} = this.props
    return (
        <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Jersey</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Primary Position</th>
                    <th>Add an Event:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>{jersey}</td>
                    <td>{last_name}</td>
                    <td>{first_name}</td>
                    <td>{position}</td>
                    </tr>
                    </tbody>
                    </Table> 
                    {/* <h2>{jersey} | {last_name}, {first_name} | {position}</h2>
                    <Input/> */}
                    
                </div>
        
    )
}
}
export default Card
