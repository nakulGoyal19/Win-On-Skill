import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Profile extends Component{
    render(){
        if(this.props.signedIn==='true')
            return(
                <>
                    <h2>Profile Page Space</h2>
                    <h5>Name: {this.props.user.username}</h5>
                    <h6>Coins: {this.props.user.coins}</h6>
                    <Link to='/'>
                        <button onClick={this.props.changeStateToFalse()}>Logout</button>
                    </Link>
                </>
            )
        else{
            return(
                <>
                    <h2>Profile Page Space</h2>
                    <h5>You're currently logged in as a guest.</h5>
                    <Link to='SignIn'>Sign In </Link>
                    or
                    <Link to='SignUp'> Sign Up</Link>

                </>
            )
            

        }
    }
}