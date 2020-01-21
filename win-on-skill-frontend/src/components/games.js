import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PAH from './games/pickahand.jpg'
import GOMOKU from './games/gomoku/gomoku_icon.jpg'
import TTT from './games/tictactoe/tictactoe.jpg'
export default class Games extends Component{
    render(){
        
        if(this.props.signedIn==='false'){
            return(
                <>
                    <h2>Games Page Space</h2>
                    <h5>In Guest session.</h5>
                    <Link to='Games/Gomoku'><img src={GOMOKU} alt="GOMOKU" width={100} height={100}/><figcaption>GOMOKU</figcaption></Link>
                    <Link to='Games/TicTacToe-MultiPlayer'><img src={TTT} alt="TicTacToe" width={100} height={100}/><figcaption>TicTacToe</figcaption></Link>

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
                        <div>
                            <h3>Single Player Games:</h3>
                            <Link to='Games/pickahand'><img src={PAH} alt="PICK A HAND" width={100} height={100}/><figcaption>Pick a hand.</figcaption></Link>
                            <Link to='Games/TicTacToe-SinglePlayer'><img src={TTT} alt="TicTacToe" width={100} height={100}/><figcaption>TicTacToe</figcaption></Link>
                        </div>
                        <div>
                            <h3>Multi Player Games:</h3>
                            <Link to='Games/Gomoku'><img src={GOMOKU} alt="GOMOKU" width={100} height={100}/><figcaption>GOMOKU</figcaption></Link>
                            <Link to='Games/TicTacToe-MultiPlayer'><img src={TTT} alt="TicTacToe" width={100} height={100}/><figcaption>TicTacToe</figcaption></Link>
                        </div>
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