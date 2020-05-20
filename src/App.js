import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Teams from './Components/Teams/Teams'
import Leaders from './Components/Leaders/Leaders'
import Chat from './Components/Chat/Chat'
//import Login from './Components/Auth/Login'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Auth}/>
          <Route path='/teams' component={Teams}/>
          <Route path='/leaders' component={Leaders}/>
          <Route path='/chat' component={Chat}/>
        </Switch>
        <Footer/>

    </div>
  );
}

export default App;
