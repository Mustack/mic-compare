import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import SnippetRecorder from './components/SnippetRecorder'

class App extends Component {
  render() {
    const contentStyle = {
      transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)'
    };

    return (
      <div style={contentStyle}>
        <Navbar/>
        <SnippetRecorder/>
      </div>
    );
  }
}

export default App;
