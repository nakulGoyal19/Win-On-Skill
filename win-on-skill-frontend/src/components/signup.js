import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class SignUp extends Component{
    render(){
        return(
            <>
                <h2>SignUp Page Space</h2>
                <Link to='/'>
                    <button onClick={this.props.changeStateToTrue()}>Click Here To Register</button>
                </Link>

            </>
        )
    }
}