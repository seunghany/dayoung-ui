import axios from 'axios'
import {User} from '../../../template'
import React, {useState} from 'react'

const UserRegister = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    
    
    const register = e => {
        e.preventDefault()
        axios.post('http:localhost:8080/user/register', {
            userid, password, name, age, gender, dateOfBirth
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
        <User/>
        <form>
            <table>
                <tr>
                    <td>ID</td>
                    <td><intput type="text" onChange={e => setUserid(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input types="text" onchange={e=> setPassword(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><input types="text" onChange={e => setName(e.target.value)} /></td>
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
                    <td>Date of Birth</td>
                    <td><input types="text" onChange ={e => setDateOfBirth(e.target.value)}/></td>
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