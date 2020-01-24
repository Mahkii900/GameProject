import React from 'react'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Fleet from './components/Fleet/Fleet'
import Economy from './components/Economy/Economy'
import Diplomacy from './components/Diplomacy/Diplomacy'
import {Switch, Route} from 'react-router-dom'

export default <Switch>
    <Route component={Home} path='/home'/>
    <Route component={Login} exact path='/'/>
    <Route component={Fleet} path='/fleet'/>
    <Route component={Economy} path='/econ'/>
    <Route component={Diplomacy} path='/diplomacy'/>
</Switch>
