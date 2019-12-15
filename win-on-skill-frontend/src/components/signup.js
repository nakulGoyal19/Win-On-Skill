import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class SignUp extends Component{
    state={
        username:"",
        password:"",
        coins:100
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        if(this.props.signedIn==='false'){
            const {username,password,coins }=this.state;
            const values={username,password,coins };
            return(
                
                <>
                    <h2>SignUp Page Space</h2>
                    <form onSubmit={this.props.changeStateToTrue.bind(this,values)}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="User Name..."
                                className="form-control"
                                name="username"
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password..."
                                className="form-control mt-2"
                                name="password"
                                onChange={this.handleChange}
                                required
                            />
                            
                                <button type='submit' className="col btn btn-primary mt-2"><Link to='/'>Sign Up</Link></button>
                            
                        </div>
                    </form>

                </>
            )
        }
        else{
            return(
                <h4>Sign Up Successful<Link to='/'> Click here </Link>to get to welcome page</h4>
            )
            
        }
    }
}