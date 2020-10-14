import React from 'react'
import { Nav } from './components'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, Item, User, Board } from './pages'

const App = () => <>

  <Router>
    <Nav/>
    <Switch>
      <Route exact path='/'component= {Home}/>
      <Route path='/user'component= {User}/>
      <Route path='/item'component= {Item}/>
      <Route path='/board'component= {Board}/>
    </Switch>
  </Router>

</>

export default App