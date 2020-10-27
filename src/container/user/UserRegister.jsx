import axios from 'axios'
import {User} from '../../template'
import React, {useState} from 'react'

const UserRegister = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const [lname, setLname] = useState()
    const [fname, setFname] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()

    
    
    const register = e => {
        e.preventDefault()
        axios.post('http:localhost:8080/user/register', {
            userid, password, lname, fname, age, gender
        })
        .then(
            console.log('Sign up Success 아이디가 생성 되셨습니다.')
        )
        .error(
            console.log('Sign up Fail 아이디가 생성 되지 않았습니다.')
        )
    }

    return (<>
        <h1>회원가입</h1>
        {/* <User/> */}
        <form>
            <table>
                <tr>
                    <td>ID</td>
                    <td><input types="text" onChange={e => setUserid(e.target.value)} /></td>
                    
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input types="text" onChange={e=> setPassword(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td><input types="text" onChange={e => setFname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input types="text" onChange={e => setLname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td><input types="text" onChange={e => setAge(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td><input types="text" onChange ={e => setGender(e.target.value)}/></td>
                </tr>
        
                <tr>
                    <td colspan={2}><button onClick={register}>Register</button>
                    <button>Cancel</button></td>
                </tr>
            </table>
        </form>
    
    </>)
}

export default UserRegister