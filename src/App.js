import React, {useState} from 'react'
import { Nav } from './components'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, User, Actor } from './templates'
import {UserLogin, UserRegister, UserUpdate, UserList, UserSearch, UserProfile} from './containers/user'
import {ActorHome, ActorQuiz, ActorList,ActorQuizSingle} from './containers/actor'

export default function App(){
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
  return (<>
  <Router>
    <Nav isAuth = {loggedIn}/>
    <Switch>
      <Route exact path='/'component= {Home}/>
      <Route path='/user'component= {User}/>
      <Route path='/actor'component= {Actor}/>
      <Route path ='/userlogin' component={UserLogin}/>
      <Route path ='/userregister' component={UserRegister}/>
      <Route path='/userlist' component={UserList}/>
      <Route path='/usersearch' component={UserSearch}/>
      <Route path='/actorlist' component={ActorList}/>
      <Route path ='/userupdate' component={UserUpdate}/>
      <Route path ='/actorhome' component={ActorHome}/>
      <Route path ='/actorquiz' component={ActorQuiz}/>
      <Route path ='/actorquizsingle' component={ActorQuizSingle}/>
      <Route path ='/userprofile' component={UserProfile}/>
      

    </Switch>

  </Router>

</>)}