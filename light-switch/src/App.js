import React, { Component } from 'react';
import Header from './Header/Header.js';
import LightSwitch from './LightSwitch/LightSwitch.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'white'
    }
  }
  handleActive = (activeVal) => {
    let backgroundColor = activeVal ? 'white' : 'black';
    this.setState({bgColor: backgroundColor});
  }
  render() {
    const bgDark = 'background-dark';
    const bgLight = 'background-light';
    if(this.state.bgColor === 'black') {
      document.body.classList.remove(bgLight);
      document.body.classList.add(bgDark);
    } else if(this.state.bgColor === 'white') {
      document.body.classList.remove(bgDark);
      document.body.classList.add(bgLight);
    }
    return (
      <div className="App">
      <Header />
      <br />
      <br />
      <LightSwitch setActive={this.handleActive} />
      </div>
    );
  }
}

export default App;
