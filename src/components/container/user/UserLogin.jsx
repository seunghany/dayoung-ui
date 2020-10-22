import React, {useState} from 'react'
import axios from 'axios'
import {User} from '../../../template'

// 여기가 다른 곳의 home 느낌 일단 여기로 오자
// import { Link } from 'react-router-dom'
// CRUD 에서 Read!
// The <tr> tag defines a row in an HTML table.
// 여기다 코딩을 안하는 이유는 memory 때문이다 
const UserLogin = e => {
    // 여기 안에다 코딩을 해야, 값을 출력 후 지우기 때문에, 
    // memory 를 차지 하지 않는다.
    const [userid, setUserid] = useState() 
    const [userPassword, setUserPassword] = useState()
    const login = (e) => {
        e.preventDefault()
        alert(`로그인 버튼 클리! 아이디: ${userid} 패스워드 : ${userPassword}` )
        axios.post(``, {userid, userPassword})
             .then(res => {
                 alert('Sucess !')
             })
             .catch(error => {
                 alert('Fail')
             })
        // post 는 암호화 되서 보냄
        // get 은 다 볼 수 있음
        // then() 성공 했을 경우
        // catch() 실패 했을 경우
    }
    const cancel = () => {
        e.preventDefault()
        alert(`캔슬 버튼 클리! ${userPassword}`)
    }
    // 밑이랑 분리함
    // 여기가 화면 시작
    return (<> 
    <h1>로그인</h1>
    <User/>
    {/* <ol>
        <li><Link to='/userlogin'></Link>UserLogin</li>
        <li><Link to='/userregister'>UserRegister</Link></li>
        <li><Link to='/userremove'>UserRemove</Link></li>
        <li><Link to='/userupdate'>UserUpdate</Link></li>
    </ol> */}
    <table>
        <tr>
            <td>ID :</td>
            <td> <input type="text" onChange={e => {setUserid(`${e.target.value}`)}}/> </td>
            
        </tr>
        <tr>
        <td>Password: </td>
            <td> <input type="text" onChange={e => {setUserPassword(`${e.target.value}`)}}/> </td>
        </tr>
        <tr>
            <td colSpan='2'>
                <input type="button" value='Login' onClick={login}/> {/* 로그인 되면 뭐할지 안정해 져 있음 */}
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