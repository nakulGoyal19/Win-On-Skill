import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Results extends Component{
    state={
        win:2
    }
    choose=(x)=>
    {
        let r=Math.floor(Math.random()*100)%2;
        console.log(r);
        //console.log(this.props.signedIn)
        if(r===x){
            console.log('match')
            setTimeout(()=>{
                this.setState({win:1})},0
            )
            //console.log(this.state.win);
        }
        else{
            this.setState({
                win:0
            })
            //console.log(this.state.win);
        }
    }
    render(){
        if(this.props.user.coins>=20){
            return(
                <>
                    <h2>pick a hand </h2><h4> Balance : {this.props.user.coins} coins</h4>
                    <button onClick={()=>this.choose(0)}>Left Hand</button>
                    <button onClick={()=>this.choose(1)}>Right Hand</button>
                    <br/>
                    <button onClick={this.props.changeCoins.bind(this,this.state.win)}>result</button>
                    <Link to='/Games'><button>Back</button></Link>
                </>
            )
        }
        else{
            return(
                <>
                    <h4>Out of Coins</h4>
                    <h4> Balance : {this.props.user.coins} coins</h4>
                </>
            )
        }
    }
}