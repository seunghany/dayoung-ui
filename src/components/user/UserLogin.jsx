import React from 'react'
import { Link } from 'react-router-dom'
// CRUD 에서 Read!
// The <tr> tag defines a row in an HTML table.
// 여기다 코딩을 안하는 이유는 memory 때문이다 
const UserLogin = () => {
// 여기 안에다 코딩을 해야, 값을 출력 후 지우기 때문에, 
// memory 를 차지 하지 않는다.

const login = () => {
    alert('로그인')
}
const cancel = () =>{
    alert('캔슬')
}
// 밑이랑 분리함
return (<> 
<h1>로그인</h1>
<table>
    <tr>
        <td>ID :</td>
        <td> <input type='text'/></td>
        
    </tr>
    <tr>
    <td>Password: </td>
        <td><input type="text"/></td>
    </tr>
    <tr>
        <td colSpan='2'>
            <input type="button" value='Login' onClick={login}/>
            <input type="button" value='Cancel' onClick={cancel}/>
        </td>

    </tr>
</table>
</>)
}


{/* <userlogin>
<h1>Login Page</h1>
    <ol>
        <li><Link to='/'></Link>UserLogin</li>
        <li><Link to='/userregister'>UserRegister</Link></li>
        <li><Link to='/userremove'>UserRemove</Link></li>
        <li><Link to='/userupdate'>UserUpdate</Link></li>
    </ol>
</userlogin> */}
export default UserLogin