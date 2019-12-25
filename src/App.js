import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/home/index.js'
import Login from './views/login/index.js'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login"></Redirect>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
