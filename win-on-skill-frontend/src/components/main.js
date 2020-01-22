import React,{Component} from 'react';
import NavBar from './navbar.js'
import WelcomePage from './welcomepage.js'
import Games from './games.js'
import Updates from './updates.js'
import SignIn from './signin.js'
import SignUp from './signup.js'
import Profile from './profile.js'
import {Route} from 'react-router-dom'
import PickAHand from './games/pickahand.js'
import Gomoku from './games/gomoku/main.js'
import TicTacToe from './games/tictactoe/App.js'
import Quiz from './quiz.js';
//import Sudoku from './games/Sudoku/src/index.js'

export default class Main extends Component{
    constructor(){
        super();
        this.state={
            signedIn:'false',
            coins:0,
            data:[],
            currentUser:{}
        }

    }
    componentDidMount(){
        console.log('did mount')
        this.getUserData();
    }
    getUserData = () => {
        console.log('in userdata');
        fetch('http://localhost:8082/data')
        .then(res=>res.json())
        .then(res=>{
            console.log(JSON.stringify(res));
            this.setState({data:res})
        })
    }
    changeStateToTrueBySignUp=(v,event)=>
    {
        event.preventDefault();
        console.log(this.state.data);

        let found='false';
        this.state.data.map((d,index)=>{
            console.log(d)
            if(d.username===v.username){
                found='true';
            }  
        })

        if(found==='false'){
            const newId=this.state.data.length+1;
            const newData={
                id:newId,
                username:v.username,
                password:v.password,
                coins:v.coins
            };
            let d=this.state.data;
            d.push(newData);
            this.setState({
                signedIn:'true',
                data:d,
                currentUser:newData
            })
        }
        else
        {
            alert('Username already taken.')
        }
    }
    changeStateToTrueBySignIn=(v,event)=>
    {
        event.preventDefault();
        console.log('In signin')
        console.log(this.state.data)
        let found='false'
        let user=''
        //console.log(this.state.data);
        this.state.data.map((d,index)=>{
            if(d.username===v.username && d.password===v.password){
                found='true';
                user=d;
            }  
        })
        if(found==='true'){
            console.log('found true')
                this.setState({
                    signedIn:'true',
                    currentUser:user
                })
        }
        else{
            console.log('found false')
            alert("username and password don't match")
        }
        //console.log(this.state)
    }
    changeStateToFalse=()=>
    {
        this.setState({
            signedIn:'false',
            currentUser:''
        })
        //console.log('In');
    }

    changeCoins=(x)=>{
        console.log('In changeCoins')
        console.log(x);
        //event.preventDefault();
        let c=this.state.currentUser;
        if(x===1){
            alert('You Won Coins Added 20');
            c.coins+=20;
            this.setState({
                currentUser:c
            })
        }
        else{
            alert('You lost Coins Detucted 20')
            c.coins-=20;
            this.setState({
                currentUser:c
            })
        }
    }
    render(){
        return(
            <>
                <NavBar/>
                <Route exact path='/' render={()=><WelcomePage signedIn={this.state.signedIn} user={this.state.currentUser}/>}></Route>
                <Route exact path='/SignIn' render={()=><SignIn signedIn={this.state.signedIn} changeStateToTrue={this.changeStateToTrueBySignIn}/>}></Route>
                <Route exact path='/SignUp' render={()=><SignUp signedIn={this.state.signedIn} changeStateToTrue={this.changeStateToTrueBySignUp}/>}></Route>
                <Route exact path='/Profile' render={()=><Profile signedIn={this.state.signedIn} user={this.state.currentUser} changeStateToFalse={()=>this.changeStateToFalse}/>}></Route>
                <Route exact path='/Games' render={()=><Games signedIn={this.state.signedIn} user={this.state.currentUser}/>}></Route>
                <Route exact path='/Quiz' render={()=><Quiz/>}></Route>
                <Route exact path='/Updates' render={()=><Updates/>}></Route>
                <Route exact path='/Games/Gomoku' render={()=><Gomoku/>}></Route>
                <Route exact path='/Games/pickahand' render={()=><PickAHand signedIn={this.state.signedIn} user={this.state.currentUser} changeCoins={this.changeCoins}/>}></Route>
                <Route exact path='/Games/TicTacToe-SinglePlayer' render={()=><TicTacToe x={0} user={this.state.currentUser} changeCoins={this.changeCoins}/>}></Route>
                <Route exact path='/Games/TicTacToe-MultiPlayer' render={()=><TicTacToe x={1}/>}></Route>

            </>
        )
    }
}