import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../template'
import {useHistory } from "react-router-dom";
// useEffect 시작하면 바로 시작됨
const UserSearch = () => {
    const history = useHistory();
    // localStorage.setItem('test','test answer')
    // localStorage.setItem("localUser", res.data);
    // const test = localStorage.getItem('test')
    const user_id = localStorage.getItem('user_id')
    const fname = localStorage.getItem('fname')
    const lname = localStorage.getItem('lname')
    const age = localStorage.getItem('age')
    const gender = localStorage.getItem('gender')
    // const user = localStorage.getItem('localUser')
    // user = JSON.parse(user)
    // alert(`제발 되라2222 ${user['user_id']}`)
    
    
    const backToList = () => {
        history.push("./userlist")

    }
    const search = e => {
        // const u_id = document.getElementById('search').value
        // alert(`Key Value: ${u_id}`)
        axios.get(`http://localhost:8080/api/user/${document.getElementById('search').value}`)
        .then(res => { 
            // alert(`Success`)
            
            // const user = JSON.parse(res.data)
            // alert(`type: ${typeof(user)}`)
            // localStorage.setItem('localUser', JSON.stringify(user))
            // alert(res.data['user_id'])
            localStorage.setItem('test','test answer')
            localStorage.setItem("user_id", res.data['user_id']);
            localStorage.setItem("fname", res.data['fname']);
            localStorage.setItem("lname", res.data['lname']);
            localStorage.setItem("age", res.data['age']);
            localStorage.setItem("gender", res.data['gender']);
            history.push('/usersearch')
        })
        .catch( e => {alert(`Search failed`) })
    }
        

    return (<User>
        Search ID : <input type="text" id='search'/> 
        
        <button onClick={search}>search</button>
        <button onClick={backToList}>Show whole List</button>
        <table>
            <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender (M or F)</th>
            </tr>
            <tr>
                <th>{user_id}</th>
                <th>{lname}</th>
                <th>{fname}</th>
                <th>{age}</th>
                <th>{gender}</th>
            </tr>
            
        </table>
    </User>)
}

export default UserSearch