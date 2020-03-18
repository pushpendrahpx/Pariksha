import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Welcome.css';
import LoginForm from '../../Components/Forms/Login/Login';

export default class Welcome extends Component{
    constructor(props){
        super(props)
        console.log("S")
    }

    
    render(){
        return <div>
            <Navbar />
            <div className='lander-section'>
                <br />
                <br />
                <br />
                <span href='#' className='lander-text'>Start Your Savings</span>
                <br /><br />
                <span className='message'>We are going to some more than yesterday.</span>
                <br />
                <br />
                <div className='asker'>
                <button className='asker-btn'>Start Now</button>
                <button className='asklink'>Get Started &gt;</button>
                <br />
                <br />
                <br />
                </div>
            </div>

            <div className='login'>
                <LoginForm />
            </div>
        </div>
    }
}