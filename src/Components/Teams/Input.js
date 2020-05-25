import React, { Component } from 'react';
import axios from 'axios'

class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {

        player_id: '',
        hr: 0,
        single: 0,
        double: 0,
        triple: 0,
        strikeout: 0,
        walk: 0,
        stolen: 0,
        out: 0
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      console.log(event.target.value)
      this.setState({  hr: 0,
      single: 0,
      double:  0,
      triple: 0,
      strikeout: 0,
      walk: 0,
      stolen: 0,
      out: 0, [event.target.value]: 1});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const {hr, single, double, triple, strikeout, walk, stolen, out} = this.state
      axios.post('/api/stats', {player_id: this.props.player_id, hr, single, double, triple, strikeout, walk, stolen, out})
      .then(() => {
        this.props.getPlayers()
    })
          .catch(error => {
              console.log('error creating stat', error)
          })
  }
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select onChange={this.handleChange}>
              <option>Select one:</option>
              <option value="strikeout">Strike Out</option>
              <option value="walk">Walk</option>
              <option value="out">Out</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="triple">Triple</option>
              <option value="hr">Homerun</option>
              <option value="stolen">Stolen Base</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Input