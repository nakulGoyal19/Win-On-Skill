import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PAH from './games/pickahand.jpg'

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
            if(1){
                return(
                    <>

                        <h2>Games Page Space</h2>
                        <h6>Hi '{this.props.user.username}'</h6><h5> Balance : {this.props.user.coins} coins</h5>
                        <br/>
                        <Link to='Games/pickahand'><img src={PAH} alt="PICK A HAND" width={100} height={100}/><figcaption>Pick a hand.</figcaption></Link>

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