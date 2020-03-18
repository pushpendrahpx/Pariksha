import React, { Component } from 'react';


import './Login.css';


export default class LoginForm extends Component{
    constructor(props){
        super(props)
        console.log("D")

    }

    login = (event)=>{
        event.preventDefault();

    }

    render(){
        return(
            <form className='loginform' onSubmit={this.login}>
                <span>Login</span>
                    <div className='f-group'>
                        <input type='number' placeholder='Phone Number' />
                    </div>
                    <div className='f-group'>
                        <input type='password' placeholder='Enter Password' />
                    </div><br />
                    <span className='loginformtext'>Create New Account</span>
                    <br /><br />
                    <div className='f-group'>
                        <button>Login</button>
                    </div>
                
            </form>
        );
    }
}