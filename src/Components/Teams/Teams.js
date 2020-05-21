import React, {Component} from "react";
import axios from "axios";
import { connect } from "react-redux";
import Input from './Input'

class Teams extends Component {
    constructor(props) {
    super(props);
    this.state = {
        user: {},
        players: [],
        jersey: '',
        last_name: '',
        first_name: '',
        position: ''
    };

    this.getPlayers = this.getPlayers.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.addPlayer = this.addPlayer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
}
    componentDidMount() {
        this.getPlayers();
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
      deletePlayer = id => {
          axios.delete(`/api/players/${id}`)
              .then(({data}) => {
                  this.setState({
                      players: data
                  })
              })
              .catch(error => {
                  console.log('Error deleting player', error)
              })
      }
      
      addPlayer = e => {
        e.preventDefault()
        const {jersey, last_name, first_name, position} = this.state
        const newPlayer = {jersey, last_name, first_name, position}
        axios.post('/api/players', newPlayer)
            .then(() => {
                this.props.history.push('/teams')
            })
            .catch(error => {
                console.log('error creating player', error)
            })
    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name] : value
        })
    }



render() {
    const mappedPlayers = this.state.players.map((player, index) => {
        
        return (
        <tr className='players' key={player.player_id}>
            <td>
                <button className='delete' onClick={() => this.deletePlayer(player.player_id)}>Demote</button>
            </td>
            <td className='jersey'>{player.jersey}</td>
            <td className='last-name'>{player.last_name}</td>
            <td className='first-name'>{player.first_name}</td>
            <td className='position'>{player.position}</td>
            <td className='hits'></td>
            <td className='outs'></td>
            <td className='walks'></td>
            <td><Input player={player}
                       key={player.player_id}
                       player_id={player.player_id}
                       
            /></td>
        </tr>)})
    return (
      <div>
        <h1>The Phoenix DevMountaineers</h1>
        <table>
          <thead>
            <tr>
              <th>Demote</th>
              <th>Jersey</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Position</th>
              <th>Hits</th>
              <th>Outs</th>
              <th>Walks</th>
              <th>Event</th>
            </tr>
          </thead>
                <tbody>{mappedPlayers}</tbody>
        </table>
        <h2>Add Player:</h2>
        <form className="input" onSubmit={this.addPlayer}>
                    <span>
                        <label>Jersey: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='jersey'
                            value={this.state.jersey}
                            placeholder='Jersey number...'/>
                    </span>
                    <br/>
                    <span>
                        <label>Last Name: </label>
                        <input
                            type='text'
                            onChange={this.handleChange}
                            name='last_name'
                            value={this.state.last_name}
                            placeholder='Last Name...'/>
                    </span>
                    <br/>
                    <span>
                        <label>First Name: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='first_name'
                            value={this.state.first_name}
                            placeholder='First Name...'/>
                    </span>
                    <br/>
                    <span>
                        <label>Position: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='position'
                            value={this.state.position}
                            placeholder='Position...'/>
                    </span>
                    <button className ="button-form">save</button>
                </form>
        
        
      </div>

    )
    }
  }
    

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Teams);