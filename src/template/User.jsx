import React from 'react'
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import {UserLogin, UserRegister, UserRemove, UserUpdate} from '../components/container/user'
import {UserMenu as Menu} from '../components'
// children은 뭐하는거지??
const User = ({children}) => <>
    <hi>User</hi>
    <Menu/>
    {children}
</>
export default User