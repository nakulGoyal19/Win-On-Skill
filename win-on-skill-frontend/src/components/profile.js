import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
export default class Profile extends Component{
    render(){
        if(this.props.signedIn==='true')
            return(
                <>
                    <h2>Profile Page Space</h2>
                    <h5>Name: {this.props.user.username}</h5>
                    <h6>Coins: {this.props.user.coins}</h6>
                    <h6>Games Played: {this.props.user.games.gamesPlayed}</h6>
                    <h6>Games Won: {this.props.user.games.gamesWon}</h6>
                    <h6>Games Lost: {this.props.user.games.gamesLost}</h6>
                    <Link to='/'>
                        <Button variant="danger" onClick={this.props.changeStateToFalse()}>Logout</Button>
                    </Link>
                </>
            )
        else{
            return(
                <>
                    <h2>Profile Page Space</h2>
                    <h5>You're currently logged in as a guest.</h5>
                    <Link to='SignIn'><Button variant="primary">Sign In</Button></Link>
                    <Link to='SignUp'><Button variant="outline-primary">Sign Up</Button></Link>

                </>
            )
            

        }
    }
}