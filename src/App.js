import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    value1: value1,
    value2: value2,
    value3: value3,
    proposedAnswer: proposedAnswer,
    numQuestions: numQuestions,
    numCorrect: numCorrect
  }
  changeNumbers = () => (
    this.setState((currentState) => {
      const val1 = Math.floor(Math.random() * 100);
      const val2 = Math.floor(Math.random() * 100);
      const val3 = Math.floor(Math.random() * 100);
      const prop = Math.floor(Math.random() * 3) + val1 + val2 + val3;
      return {
        value1: val1,
        value2: val2,
        value3: val3,
        proposedAnswer: prop
      }
	})
  )
  checkAnswer = (ans) => (
    this.setState((currentState) => {
      const value = currentState.value1 + currentState.value2 + currentState.value3;
      this.changeNumbers();
      if (value === currentState.proposedAnswer) {
      	if (ans) {
    	  return {
    		numQuestions: currentState.numQuestions + 1,
    		numCorrect: currentState.numCorrect + 1
    	  }
    	} else {
          return {
    		numQuestions: currentState.numQuestions + 1
          }
        }
      } else {
        if (!ans) {
    	  return {
    		numQuestions: currentState.numQuestions + 1,
    		numCorrect: currentState.numCorrect + 1
    	  }
    	} else {
          return {
    		numQuestions: currentState.numQuestions + 1
          }
        }
  	  }
    })
  )
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {`${this.state.numCorrect}/${this.state.numQuestions}`}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
