import React, { Component } from 'react'
import Home from './components/Home'
import GetUser from './components/GetUser'
import { Switch, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/user/:id" component={GetUser}></Route>
      </Switch>
    );
  }
}

export default App;
