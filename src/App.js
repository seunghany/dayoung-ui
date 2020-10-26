import React, {useState} from 'react'
import { Nav } from './components'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, User, Actor } from './template'
import {UserLogin, UserRegister, UserRemove, UserUpdate, UserList} from './container/user'
import {ActorHome, ActorQuiz} from './container/actor'

export default function App(){
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
  return (<>
  <Router>
    <Nav isAuth = {loggedIn}/>
    <Switch>
      <Route exact path='/'component= {Home}/>
      <Route path='/user'component= {User}/>
      <Route path='/actor'component= {Actor}/>
      {/* <Route path ='/signin-form' component={UserLogin}/> */}
      <Route path='/signin-form' component={UserLogin}/>
      <Route path='/signup-form' component={UserRegister}/>
      {/* <Route path ='/userregister' component={UserRegister}/> */}
      <Route path='/userlist' component={UserList}/>
      <Route path ='/userremove' component={UserRemove}/>
      <Route path ='/userupdate' component={UserUpdate}/>
      <Route path ='/actorhome' component={ActorHome}/>
      <Route path ='/actorquiz' component={ActorQuiz}/>

    </Switch>

  </Router>

</>)}