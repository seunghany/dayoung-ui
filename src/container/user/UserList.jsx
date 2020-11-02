import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../template'
import {useHistory } from "react-router-dom";

// useEffect 시작하면 바로 시작됨
const UserList = () => {
    const [data, setData] = useState([])
    const history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
        .then(res=>{
            // alert(`list Success`)
            console.log(typeof(res.Data))
            setData(res.data) // database 안에 있는 데이터 res.data['lname'] 이런식으로 뽑을 수 있음
        })
        .catch(e =>{
            alert(`list Fail`)
            throw(e)
        } )
    },[])
    const search = e => {
        const u_id = document.getElementById('search').value
        localStorage.setItem("user_id", u_id)
        history.push('/usersearch')
        // axios.get(`http://localhost:8080/api/user/${u_id}`)
        // .then(res => { 
        //     // alert(`Success`)
            
        //     // const user = JSON.parse(res.data)
        //     // alert(`type: ${typeof(user)}`)
        //     // localStorage.setItem('localUser', JSON.stringify(user))
        //     // alert(res.data['user_id'])
        //     localStorage.setItem('test','test answer')
        //     localStorage.setItem("user_id", res.data['user_id']);
        //     localStorage.setItem("fname", res.data['fname']);
        //     localStorage.setItem("lname", res.data['lname']);
        //     localStorage.setItem("age", res.data['age']);
        //     localStorage.setItem("gender", res.data['gender']);
        //     history.push('/usersearch')
        // })
        // .catch( e => {alert(`Search failed`) })
    }

    return (<User>
        Search ID : <input type="text" id='search'/> 
            <button onClick={search}>Search</button>
        <table>
            <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender (M or F)</th>
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                    <td>{i.user_id}</td>
                    <td>{i.fname}</td>
                    <td>{i.lname}</td>
                    <td>{i.age}</td>
                    <td>{i.gender}</td>
                </tr>
            ))}
            
        </table>
    </User>)
}

export default UserList