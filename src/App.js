import React, { Component } from 'react';
import Logo from './Logo';
import './App.css';

class App extends Component {

  randomColor() {
    return "#" + ("000000" + Math.floor(Math.random()*0xffffff).toString(16)).slice(-6);
  }

  state = {
    color: this.randomColor(),
    bg: this.randomColor(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: this.randomColor(),
        bg: this.randomColor(),
      })
    }, 6000)
  }

  handleClick = () => {}

  render() {
    const { color, bg } = this.state;

    return (
      <div className="App" style={{backgroundColor: `${bg}`}}>
        <div className="App-header">
          <Logo fill={color} />
          <div id="instafetch"></div>
        </div>
      </div>
    );
  }
}

export default App;
