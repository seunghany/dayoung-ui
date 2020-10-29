import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../template'

// useEffect 시작하면 바로 시작됨
const UserList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
        .then(res=>{
            alert(`list search`)
            console.log(typeof(res.Data))
            setData(res.data) // database 안에 있는 데이터 res.data['lname'] 이런식으로 뽑을 수 있음
        })
        .catch(e =>{
            alert(`list Fail`)
            throw(e)
        } )
    },[])
    const search = e => {
        alert(`Key Value: ${document.getElementById('search').value}`)
        axios.get(`http://localhost:8080/api/user/${document.getElementById('search').value}`)
        .then(res => { 
            alert(`Success`)
            console.log(typeof(res.data))
            // setData(res.data)
        })
        .catch( e => { alert(`Search failed`) })
    }

    return (<User>
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
                    <td>{i.lname}</td>
                    <td>{i.fname}</td>
                    <td>{i.age}</td>
                    <td>{i.gender}</td>
                </tr>
            ))}
            
        </table>
    </User>)
}

export default UserList