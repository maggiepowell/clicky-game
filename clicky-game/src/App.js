import React, { Component } from 'react';
import Scorebar from './scorebar';
import Images from './images';
import './App.css';

class App extends Component {

  state = {
    score: 0
  }

  scoreUpdate = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return (
      <div className="App">
        <Scorebar score={this.state.score}/>
        <Images incrementScore={this.scoreUpdate}/>
      </div>
    );
  }
}

export default App;
