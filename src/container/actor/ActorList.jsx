import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Actor} from '../../template'

// useEffect 시작하면 바로 시작됨
const ActorList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/api/Actors')
        .then(res=>{
            // alert(`list Success`)
            setData(res.data)
        })
        .catch(e =>{
            alert(`list Fail`)
            throw(e)
        },[] )
    })
    // columns=['photoUrl', 'age','name','realName','religion','agency', 'spouse', 'children','debutYear','actorid']
    return (<Actor>
        <table>
            <tr>
                <th>Actorid</th>
                <th>name</th>
                <th>realName</th>
                <th>religion</th>
                <th>age</th>
                <th>agency</th>
                <th>spouse</th>
                <th>children</th>
                <th>debutYear</th>
                <th>photoUrl</th>

            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                    <td>{i.Actorid}</td>
                    <td>{i.name}</td>
                    <td>{i.realName}</td>
                    <td>{i.religion}</td>
                    <td>{i.agency}</td>
                    <td>{i.spouse}</td>
                    <td>{i.children}</td>
                    <td>{i.debutYear}</td>
                    <td>{i.photoUrl}</td>
                </tr>
            ))}
            
        </table>
    </Actor>)
}

export default ActorList