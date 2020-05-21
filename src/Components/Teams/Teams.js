// import React, { Component } from 'react'
// import axios from 'axios'
// import Card from './Card.js'
// import {Link, Redirect} from 'react-router-dom'

// class Teams extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             user: {},
//             players: [],
//             redirect: false
//         }
//         this.getPlayers = this.getPlayers.bind(this)
        
//     } 

//     componentDidMount() {
//         this.getPlayers()
//     }

//     getPlayers = () => {
//         axios.get('/api/players')
//         .then(({data}) => {
//             this.setState({
//                 players: data
//             })
//             console.log(data)
//         }).catch(err => console.log('Error getting player', err))
//     }
    

//     render() {
//         console.log(this.state.players)
//         let {redirect} = this.state

//         if (redirect) {
//             return <Redirect to='/'/>
//         }
        
//         const mappedPlayers = this.state.players.map(item =>
    
//             <Card item = {item}
//             key={item.player_id}
//             player_id= {item.player_id}
//             last_name={item.last_name}
//             first_name={item.first_name}
//             jersey={item.jersey}
//             position={item.position}
//             getPlayers = {this.getPlayers}
//             />
//                 ) 
//         return (
            
//                     <div className='teams-main'>     
//                         <div>
//                                     <Link to='/form' className='link'><button>add p</button></Link>

//                         </div>
//                         <section>
//                             {mappedPlayers}
//                         </section>
//                     </div>
                
//         )
    
// }}



// export default Teams 

import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input"

import Table from "./Table";
import "./teams.css";
import { render } from "ejs";

//class Teams extends React {
function Teams() {
  const columns = useMemo(
    () => [
      {
        Header: "DivMountaineers",
        columns: [
          {
            Header: "Jersey Number",
            accessor: "jersey"
          },
          {
            Header: "Last Name",
            accessor: "last_name"
          },
          {
            Header: "First Name",
            accessor: "first_name"
          },
          {
            Header: "Primary Position",
            accessor: "position"
          },



        ]
      },
      {
        Header: "Stats",
        columns: [
          {
            Header: "Hits",
            accessor: 'hits'
          },
          {
            Header: "Outs",
            accessor: 'outs'
          },
          {
            Header: "Walks",
            accessor: 'walk'
          },
        //   {
        //     Header: "Status",
        //     accessor: "show.status"
        //   }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("/api/players");
      setData(result.data);
    })();
  }, []);
  return (
    <div className="App">
      <Table columns={columns} data={data} />
      <Input/>
    </div>
  );
}

export default Teams;