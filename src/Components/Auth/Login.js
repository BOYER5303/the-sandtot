import React, { Component } from 'react' 
import {connect} from 'react-redux'
import {login} from '../../Redux/reducers/user'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '', 
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.login(this.state)
            .then(() => {
                this.props.redirect()
            })
            .catch(err => {
                console.log('error loggin in', err)
            })
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='mission-statement'>
                <h1>Just a place to track little league stats and talk everything brautwurst.</h1>
                <h2></h2>
            <div className='auth-container'>
                
                <form onSubmit={this.handleLogin} className='auth-form'>
                    <input
                        type='text'
                        value={this.state.email}
                        name='email'
                        onChange={this.handleChange}
                        placeholder='email'/>
                    <input
                        type='password'
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChange}
                        placeholder='password'/>
                    <button>login</button>
                </form>
                <button onClick={this.props.toggle}>Need to register?</button>
            </div>
            </div>
        )
    }
}

export default connect(null, {login})(Login)