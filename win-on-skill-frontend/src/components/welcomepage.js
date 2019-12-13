import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class WelcomePage extends Component{
    
    render(){
        if(this.props.signedIn==='false'){
            return(
                <>
                    <h2>Welcome Page Space</h2>
                    <h5>You are in a guest session
                    <Link to='SignIn'> SignIn  </Link>
                    or
                    <Link to='SignUp'>  SignUp </Link>
                    to gain some coins .</h5>
                </>
            )
        }
        else{
            return(
                <>
                    <h2> welcome '{this.props.user.username}'</h2>
                    <h5>You have {this.props.user.coins} coins.</h5>
                </>
            )
        }

    }
}