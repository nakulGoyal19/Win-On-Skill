import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import LH from './lefthand.jpg';
import RH from './righthand.jpg';
import 'bootstrap/dist/css/bootstrap.css';
export default class Results extends Component{
    state={
        win:2
    }
    choose=(x)=>
    {
        let r=Math.floor(Math.random()*100)%2;
        console.log(r);
        console.log(x)
        if(r===x){
            console.log('match')
            setTimeout(()=>{
                this.setState({win:1});
                setTimeout(()=>this.props.changeCoins(this.state.win),0);
            },0)
            //console.log(this.state.win);
        }
        else{
            //this.props.changeCoins.bind(this,this.state.win);
            setTimeout(()=>{
                this.setState({win:0});
                setTimeout(()=>this.props.changeCoins(this.state.win),0);
            },0)
            console.log('in else ');
        }
    }
    render(){
        if(this.props.user.coins>=20){
            return(
                <>
                    <center>
                    <h2>PICK A HAND</h2><h4> Balance : {this.props.user.coins} coins</h4>
                    <h6>Pick a hand with coin.(Bet 20 coins)</h6>
                    <button onClick={()=>this.choose(0)}><img src={LH} alt="Left Hand" width={100} height={100}/></button>
                    <span> </span>
                    <button onClick={()=>this.choose(1)}><img src={RH} alt="Right Hand" width={100} height={100}/></button>
                    <br/>
                    <Link to='/Games'><button>Back</button></Link>
                    </center>
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