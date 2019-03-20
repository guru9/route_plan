import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import SignIn from './components/auth/SignedIn'
import SignUp from './components/auth/SignedUp'
import Dashboard from './components/dashboard/Dashboard'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
