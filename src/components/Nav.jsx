import React from 'react'
import { Link, useHistory} from 'react-router-dom'
const Nav = props => {

    const history  = useHistory()
    const logout = e => {
        alert('logout')
        e.preventDefault();
        sessionStorage.removeItem("sessionUser")
        let sessionUser = sessionStorage.getItem('sessionUser')
        alert('>>>>>>'+sessionUser)
        history.push('/welcome')
        window.location.reload()
    }
    return (<>
    <nav style={{width: '500px', margin: '0 auto'}}>
        { props.isAuth !== null
        ? <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/actor'>Actor</Link></li>
            <li onClick={logout} style={{textDecoration:'underline'}}>Logout</li>
        </ul>:
        <ul>
            <li><Link to='/userregister'>Register</Link></li>
            <li><Link to='/userlogin'>Login</Link></li>
            <li><Link to='/'>Cancel</Link></li>
        </ul>
        }

    </nav>
    </>)
}
export default Nav

