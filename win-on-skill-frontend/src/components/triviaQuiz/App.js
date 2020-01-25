import React, { Component } from 'react'
import QuestionList from './components/quiz/QuestionList'
import Scorebox from './components/quiz/Scorebox'
import Results from './components/quiz/Results'
import './App.css'
import { createQuizData as quizData } from './api/opentdb'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      score: 0,
      current: 0,
      loading: false
    }
  }

  setCurrent(current) {
    this.setState({ current })
  }

  setScore(score) {
    this.setState({ score })
  }

  async componentDidMount() {
    try {
      this.setState({ loading: false })
      const question= await quizData();
      console.log(question);
      this.setState({ questions: question, loading: true })
    } catch (err) {
      console.log(err)
      console.log('not loaded')
      console.log(this.state.loading);
    }
  }

  render() {
    
    if (this.state.loading === true) {
      if (this.state.current >= this.state.questions.length) {
        var scorebox = ''
        var results = <Results {...this.state} />
      } else {
        scorebox = <Scorebox {...this.state} />
        results = ''
      }
      return (
        <div>
          {scorebox}
          <QuestionList
            {...this.state}
            setCurrent={this.setCurrent.bind(this)}
            setScore={this.setScore.bind(this)}
          />
          {results}
        </div>
      )
    } else {
      return null
    }
  }
}

export default App