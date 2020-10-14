import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {UserLogin, UserRegister, UserRemove, UserUpdate} from '../components/user'
const User = () => <>
    <Router>
        <UserLogin/>
        <Switch>
            <Route exact path ='/' component={UserLogin}/>
            <Route path ='/userregister' component={UserRegister}/>
            <Route path ='/userremove' component={UserRemove}/>
            <Route path ='/userupdate' component={UserUpdate}/>
        </Switch>
    </Router>
</>
export default User