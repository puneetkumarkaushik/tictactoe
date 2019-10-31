import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {
  render(){
    return <Grid over = {this.gameOver}/>
  }
}

export default App;
