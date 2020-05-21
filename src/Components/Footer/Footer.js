import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../Redux/reducers/user'
import './footer.css'

class Footer extends Component {
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
          <button className='button' onClick={this.handleLogout}>Logout</button>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = state => {
  let {data: user} = state.user
  return {user}
}

const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
