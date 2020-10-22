import React from 'react'
import { Nav } from './components'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, Item, User, Board } from './template'
import {UserLogin, UserRegister, UserRemove, UserUpdate} from './components/container/user'

const App = () => <>

  <Router>
    <Nav/>
    <Switch>
      <Route exact path='/'component= {Home}/>
      <Route path='/user'component= {User}/>
      <Route path='/item'component= {Item}/>
      <Route path='/board'component= {Board}/>
      <Route path ='/userlogin' component={UserLogin}/>
      <Route path ='/userregister' component={UserRegister}/>
      <Route path ='/userremove' component={UserRemove}/>
      <Route path ='/userupdate' component={UserUpdate}/>
    </Switch>

  </Router>

</>

export default App