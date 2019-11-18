import React,{Component} from 'react';
import NavBar from './navbar.js'
import WelcomePage from './welcomepage.js'
export default class Main extends Component{
    render(){
        return(
            <>
                <NavBar/>
                <WelcomePage/>
            </>
        )
    }
}