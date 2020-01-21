import React,{Component} from 'react';
import TQ from './triviaQuiz/trivia.jpg';
import TriviaQuiz from './triviaQuiz/App.js';
export default class Quiz extends Component{
    render(){
        return(
            <>
                <center>
                    <img class="logo" src={TQ} height={200} width={200}/>
                    <h1>Win-On-Skill</h1>
                    <p>Trivia</p>
                </center>
                <TriviaQuiz/>
            </>
        )
    }
}