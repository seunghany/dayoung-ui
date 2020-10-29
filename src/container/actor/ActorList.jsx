import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Actor} from '../../template'

// useEffect 시작하면 바로 시작됨
const ActorList = () => {
    const [data, setData] = useState([])
    useEffect((yourCallback) => {
        axios.get('http://localhost:8080/api/actors')
        .then(res=>{
            alert(`list Success`)
            // res.data = object,object
            setData(res.data) // undefined
        })
        .catch(e =>{
            alert(`list Fail`)
            throw(e)
        } )
    },[])

    const Search = () => {
        axios.search('http://localhost:8080/api/actors')
        .then(res=>{
            alert(`Search Success`)
            setData(res.data)
        })
        .catch(e=>{
            alert(`search Failed`)
            throw(e)
        })

    }

    

    // columns=['photoUrl', 'age','name','realName','religion','agency', 'spouse', 'children','debutYear','actorid']
    return (<Actor>
        <h1>hello</h1>
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
                // <a href="/actor/+ i.actor_id" >
                <tr key={index}>
                    <td>{i.actor_id}</td>
                    <td>{i.name}</td>
                    <td>{i.real_name}</td>
                    <td>{i.religion}</td>
                    <td>{i.age}</td>
                    <td>{i.agency}</td>
                    <td>{i.spouse}</td>
                    <td>{i.children}</td>
                    <td>{i.debut_year}</td>
                    <td>{i.photo_url}</td>
                </tr>
                // </a>
            ))}
            
        </table>
    </Actor>)
}

export default ActorList