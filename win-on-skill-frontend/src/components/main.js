import React,{Component} from 'react';
import NavBar from './navbar.js'
import WelcomePage from './welcomepage.js'
import Games from './games.js'
import Results from './results.js'
import Updates from './updates.js'
import SignIn from './signin.js'
import SignUp from './signup.js'
import Profile from './profile.js'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
export default class Main extends Component{
    constructor(){
        super();
        this.state={
            signedIn:'false',
            coins:0,
            data:[
                {id:1,username:'x',password:'xpass',coins:56},
                {id:2,username:'y',password:'ypass',coins:170}
            ],
            currentUser:{}
        }

    }
    changeStateToTrueBySignUp=(v,event)=>
    {
        event.preventDefault();
        //console.log('In');
        const newId=this.state.data.length+1;
        const newData={
            id:newId,
            username:v.username,
            password:v.password,
            coins:v.coins
        };
        
        this.setState({
            signedIn:'true',
            data:this.state.data.push(newData),
            currentUser:newData
        })
        console.log(this.state.data);
    }
    changeStateToTrueBySignIn=(v,event)=>
    {
        event.preventDefault();
        console.log('In signin')
        let found='false'
        let user=''
        this.state.data.map((d,index)=>{
            console.log(d)
            if(d.username==v.username && d.password==v.password){
                found='true';
                user=d;
            }  
        })
        console.log(v);
        console.log(found);
        if(found==='true'){
            this.setState({
                signedIn:'true',
                currentUser:user
            })
        }
        else{

        }
    }
    changeStateToFalse=()=>
    {
        this.setState({
            signedIn:'false',
            currentUser:''
        })
        //console.log('In');
    }
    render(){
        return(
            <>
                <NavBar/>
                <Route exact path='/' render={()=><WelcomePage signedIn={this.state.signedIn} user={this.state.currentUser}/>}></Route>
                <Route exact path='/SignIn' render={()=><SignIn signedIn={this.state.signedIn} changeStateToTrue={this.changeStateToTrueBySignIn}/>}></Route>
                <Route exact path='/SignUp' render={()=><SignUp signedIn={this.state.signedIn} changeStateToTrue={this.changeStateToTrueBySignUp}/>}></Route>
                <Route exact path='/Profile' render={()=><Profile signedIn={this.state.signedIn} user={this.state.currentUser} changeStateToFalse={()=>this.changeStateToFalse}/>}></Route>
                <Route exact path='/Games' render={()=><Games/>}></Route>
                <Route exact path='/Results' render={()=><Results/>}></Route>
                <Route exact path='/Updates' render={()=><Updates/>}></Route>
            </>
        )
    }
}