import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Games extends Component{
    render(){
        
        if(this.props.signedIn==='false'){
            return(
                <>
                    <h2>Games Page Space</h2>
                    <h5>In Guest session.</h5>
                </>
            )
        }
        else{
            if(this.props.user.coins>=20){
                return(
                    <>

                        <h2>Games Page Space</h2>
                        <h6>Hi '{this.props.user.username}'</h6><h5> Balance : {this.props.user.coins} coins</h5>
                        <br/>
                        <h3>Pick A Hand </h3>
                        <Link to='Games/pickahand'>PLAY</Link>
                    </>
                )
            }
            else
            {
                return(
                    <>

                    <h2>Games Page Space</h2>
                    <h6>Hi '{this.props.user.username}'</h6>
                    <br/>
                    <h4>Not enough Coins </h4>
                    <h5> Balance : {this.props.user.coins} coins</h5>
                </>
                )
            }
        }
    }
}