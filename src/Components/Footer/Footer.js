import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './footer.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {},
            redirect: false
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout = () => {
        this.props.logout()
            .then(({data}) => {
                this.setState({
                    user: data,
                    redirect: true
                })
            })
            .catch(error => {
                console.log('error logging out', error)
            })
    }
  render() {
      let {redirect} = this.state

      if (redirect) {
          return <Redirect to ='/'/>
      }
    return(
      <footer className="footer-main">
        <div className="footer-break">
          <h1>Contact: <span>Jason@TheSandtot.com</span></h1>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </footer>
    );
  }
}

export default Header;