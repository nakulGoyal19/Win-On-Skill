import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
export default class SignIn extends Component{
    state={
        username:"",
        password:""
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        if(this.props.signedIn==='false'){
            const {username,password }=this.state;
            const values={username,password };
            return(
                <>
                    <h2>SignIn Page Space</h2>
                    <Form onSubmit={this.props.changeStateToTrue.bind(this,values)}>
                        <Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username : </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="User Name..."
                                    className="form-control"
                                    name="username"
                                    onChange={this.handleChange}
                                    required
                                />
                            
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password : </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password..."
                                    className="form-control mt-2"
                                    name="password"
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Button type='submit' variant="primary">Sign In</Button>
                        </Form.Row>
                    </Form>
                </>
            )
        }
        else
        {
            return(
                <h4>Sign In Successful<Link to='/'><Button variant="outline-success">click here</Button></Link>to get to welcome page</h4>
            )
        }
    }
}