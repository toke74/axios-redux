import React, { Component } from 'react';
import './App.css';
import Posts from './Posts/Posts';
import User from "./Posts/PostForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Posts/>
        <User />
      </div>
    );
  }
}

export default App;
