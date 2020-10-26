import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => <nav>
    <ol>
        <li><Link to ='/userlogin'>User Login</Link></li>
        <li><Link to ='/userregister'>User register</Link></li>
        <li><Link to ='/userremove'>User remove</Link></li>
        <li><Link to ='/userupdate'>User update</Link></li>
        <li><Link to ='/userlist'>User List</Link></li>
    </ol>
    
</nav>

export const ActorMenu = () => <nav>
    <ol>
        <li><Link to = '/actorhome'>Actor Home</Link></li>
        <li><Link to = '/actorquiz'>Actor Quiz</Link></li>
        <li><Link to = '/actorlist'>Actor List</Link></li>
    </ol>

</nav>

export const AuthMenu = () => (<nav>
    <ol>
        <li><Link to='/userlogin'>Siginup Form</Link></li>
        <li><Link to='/userregister'>Signin Form</Link></li>
    </ol>
</nav>)