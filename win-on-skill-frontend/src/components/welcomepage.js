import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class WelcomePage extends Component{
    
    render(){
        if(this.props.signedIn==='false'){
            return(
                <>
                    <h2>Welcome Page Space</h2>
                    <Link to='SignIn'>SignIn  </Link>
                    <Link to='SignUp'>  SignUp</Link>
                </>
            )
        }
        else{
            return(
                <>
                    <h2> welcome this person</h2>
                </>
            )
        }

    }
}