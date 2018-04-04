import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'reactbulma'
var FontAwesome = require('react-fontawesome');

class App extends Component {
  render() {
    return (
      <div className="App">
        <a className="button is-primary is-pulled-left">Click ME!</a>
        <br/>
        <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      </div>
    );
  }
}

export default App;
