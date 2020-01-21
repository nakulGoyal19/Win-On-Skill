import React, { Component } from 'react'
import AnswerKey from './AnswerKey'
import { Button } from 'react-bootstrap'

class Results extends Component {
    createScoreMessage(percent) {
        let message = ''
        if (percent === 100) {
            message = 'Perfect Score!'
        } else if (percent > 80) {
            message = 'Awesome Job!'
        } else if (percent < 80 && percent > 60) {
            message = 'You Did Ok!'
        } else {
            message = "Don't Quit your Day Job!"
        }
        return message
    }

    render() {
        var percent = (this.props.score / this.props.questions.length * 100)
        return (
            <div>
                <>
                    <center>
                        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                        <h1>{percent}%</h1>
                        <hr />
                        <h2>{this.createScoreMessage(percent)}</h2>
                    </center>
                    <hr />
                    <center>
                        <Button bsStyle="success" href="/Quiz">Take Again</Button>
                    </center>
                </>
                <>
                    <center>
                        <h3>Answer Key</h3>
                    </center>
                    <hr />
                    <AnswerKey questions={this.props.questions} />
                </>
            </div >
        )
    }
}

export default Results