import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../template'

// useEffect 시작하면 바로 시작됨
const UserList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
        .then(res=>{
            // alert(`list Success`)
            setData(res.data)
        })
        .catch(e =>{
            alert(`list Fail`)
            throw(e)
        },[] )
    })

    return (<User>
        <table>
            <tr>
                <th>userid</th>
                <th>age</th>
                <th>gender</th>
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                    <td>{i.userid}</td>
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