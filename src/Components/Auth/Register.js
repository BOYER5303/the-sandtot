import React, { Component } from 'react'
import {connect} from 'react-redux'
import {register} from '../../Redux/reducers/user'
//import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', 
            email: '', 
            password: ''
            
        }
    }

    handleRegister = e => {
        e.preventDefault()
        this.props.register(this.state)
            .then(() => {
                this.props.redirect()
            })
            .catch(err => {
                console.log('error registering', err)
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
            <div className='auth-container'>
                <h1>Please register:</h1>
                <div className='register-form'>
                <form  onSubmit={this.handleRegister} className='auth-form'>
                <input
                    type='text'
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange}
                    placeholder='Full Name...'/>
                <br/>
                <input
                    type='text'
                    value={this.state.email}
                    name='email'
                    onChange={this.handleChange}
                    placeholder='Email...'/>
                    <br/>
                <input
                    type='password'
                    value={this.state.password}
                    name='password'
                    onChange={this.handleChange}
                    placeholder='Password...'/>
                    <br/>
                <button>Register</button>
                </form>
                </div>
                <button onClick={this.props.toggle}>Need to login?</button>
            </div>
        )
    }
}

export default connect(null, {register})(Register)