import {Switch} from 'react-router-dom'

import React from 'react'

import Route from './Route'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/register" component={SignUp}></Route>

        <Route exact path="/dashboard" component={Dashboard} isPrivate></Route>
        
    </Switch>
  )
}

export default Routes