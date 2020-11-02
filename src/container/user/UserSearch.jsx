import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../template'
import {useHistory } from "react-router-dom";
// useEffect 시작하면 바로 시작됨
const UserSearch = () => {
    const history = useHistory();
    const backToList = () => {
        history.push("./userlist")
    }
    
    const [data, setData] = useState([])
    const u_id = localStorage.getItem('user_id')
    useEffect(() => {
        axios.get(`http://localhost:8080/api/user/${u_id}`)
        .then(res=>{
            console.log(typeof(res.Data))
            setData(res.data) // database 안에 있는 데이터 res.data['lname'] 이런식으로 뽑을 수 있음
        })
        .catch( e => {alert(`Search failed`) })
    },[])
    
    const search = e => {
        const u_id = document.getElementById('search').value
        localStorage.setItem("user_id", u_id)
        window.location.reload()
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
                <th>{data['user_id']}</th>
                <th>{data['lname']}</th>
                <th>{data['fname']}</th>
                <th>{data['age']}</th>
                <th>{data['gender']}</th>
            </tr>
            
        </table>
    </User>)
}

export default UserSearch