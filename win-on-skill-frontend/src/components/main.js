import React,{Component} from 'react';
import NavBar from './navbar.js'
import WelcomePage from './welcomepage.js'
import Games from './games.js'
import Results from './results.js'
import Updates from './updates.js'
import SignIn from './signin.js'
import SignUp from './signup.js'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
export default class Main extends Component{
    constructor(){
        super();
        this.state={
            signedIn:'false'
        }

    }
    changeStateToTrue=()=>
    {
        this.setState({
            signedIn:'true'
        })
        console.log('In');
    }
    render(){
        return(
            <>
                <NavBar/>
                <Route exact path='/' render={()=><WelcomePage signedIn={this.state.signedIn}/>}></Route>
                <Route exact path='/SignIn' render={()=><SignIn signedIn={this.state.signedIn}/>}></Route>
                <Route exact path='/SignUp' render={()=><SignUp signedIn={this.state.signedIn} changeStateToTrue={()=>this.changeStateToTrue}/>}></Route>
                <Route exact path='/Games' render={()=><Games/>}></Route>
                <Route exact path='/Results' render={()=><Results/>}></Route>
                <Route exact path='/Updates' render={()=><Updates/>}></Route>
            </>
        )
    }
}