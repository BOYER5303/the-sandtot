import React, {Component} from "react";
import axios from "axios";
import { connect } from "react-redux";
//import './teams.css'

class Leaders extends Component {
    constructor(props) {
    super(props);
    this.state = {
        user: {},
        players: [],
        hrs:[],
        walks:[],
        sbs:[],
    };

    this.getHomeruns = this.getHomeruns.bind(this);
    this.getWalks = this.getWalks.bind(this);
    this.getSb = this.getSb.bind(this);
    
}
    componentDidMount() {
        this.getHomeruns();
        this.getWalks();
        this.getSb();
       //this.getPlayers();
       // this.getHits();
    }

    getHomeruns = () => {
        axios.get('/stats/hr')
        .then(({data}) => {
            this.setState({
                hrs: data
            })
            console.log(data)
        }).catch(err => console.log('Error getting HR', err))
    }
    getWalks = () => {
        axios.get('/stats/walks')
        .then(({data}) => {
            this.setState({
                walks: data
            })
            console.log(data)
        }).catch(err => console.log('Error getting walks', err))
    }
    getSb = () => {
        axios.get('/stats/sb')
        .then(({data}) => {
            this.setState({
                sbs: data
            })
            console.log(data)
        }).catch(err => console.log('Error getting stolen bases', err))
    }

render() {
    const mappedHrs = this.state.hrs.map((hr, index) => {
        return (
        <tr className='players' key={hr.player_id}>
           
            <td className='jersey'>{hr.jersey}</td>
            <td className='last-name'>{hr.last_name}</td>
            <td className='first-name'>{hr.first_name}</td>
            <td className='homeruns'>{hr.homeruns} </td>
        </tr>)})

        const mappedWalks = this.state.walks.map((walk, index) => {    
        return (
        <tr className='players' key={walk.player_id}>
               
            <td className='jersey'>{walk.jersey}</td>
            <td className='last-name'>{walk.last_name}</td>
            <td className='first-name'>{walk.first_name}</td>
            <td className='walks'>{walk.walks} </td>
        </tr>)})

        const mappedSbs = this.state.sbs.map((sb, index) => {
        return (
        <tr className='players' key={sb.player_id}>
       
            <td className='jersey'>{sb.jersey}</td>
            <td className='last-name'>{sb.last_name}</td>
            <td className='first-name'>{sb.first_name}</td>
            <td className='stolen-bases'>{sb.stolen_bases} </td>
        </tr>)})

    return (
      <div>
        <h1>Home Run Leaders:</h1>
        <table>
          <thead>
            <tr>
              <th>Jersey</th>
              <th>Last Name:</th>
              <th>First Name:</th>
              <th>Homeruns:</th>
            </tr>
          </thead>
                <tbody>{mappedHrs}</tbody>
        </table>
        <h1>Walk Leaders:</h1>
        <table>
          <thead>
            <tr>
            <th>Jersey</th>
              <th>Last Name:</th>
              <th>First Name:</th>
              <th>Walks:</th>
            </tr>
          </thead>
                <tbody>{mappedWalks}</tbody>
        </table>
        <h1>Stolen Base Leaders:</h1>
        <table>
          <thead>
            <tr>
            <th>Jersey</th>
              <th>Last Name:</th>
              <th>First Name:</th>
              <th>Stolen Bases:</th>
            </tr>
          </thead>
                <tbody>{mappedSbs}</tbody>
        </table>
        <h1>Batting Average:</h1>
        <table>
          <thead>
            <tr>
            <th>Jersey</th>
              <th>Last Name:</th>
              <th>First Name:</th>
              <th>Batting Average:</th>
            </tr>
          </thead>
                <tbody></tbody>
        </table>
      </div>

    )
    }
  }
    

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Leaders);