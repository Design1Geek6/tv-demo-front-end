import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ManagePage from './Pages/ManagePage.js'
import PreviewPage from './Pages/PreviewPage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='./' component={ManagePage} />
            <Route path='/PreviewPage' component={PreviewPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
