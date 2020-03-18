import React,{Component} from 'react';
import './Navbar.css';
class Navbar extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return <div className='Navbar'>
            <div className='brand'>Logo</div>
            <div className='central'>
                <div className='link'>Home</div>
                <div className='link'>Login</div>
                <div className='link'>About</div>
                <div className='link'>Developer</div>
            </div>
            {/* <div className='right'>Right</div> */}
        </div>
    }
}
export default Navbar