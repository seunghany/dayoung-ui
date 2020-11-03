import React, {useEffect, useCallback, useState} from 'react'
import {User} from '../../template'
import {useHistory } from "react-router-dom";
import { context as c } from '../../context'
import axios from 'axios'

const useStyles = () => ({
    title : {
        color:"#ff0000",
    }
})

const UserUpdate = () => {
    const classes = useStyles();
    const sessionUser_id = sessionStorage.getItem("sessionUser")
    const history = useHistory()
    const backToHome = () => {
        history.push('/')
    }
    const [data, setData] = useState([])

    const fetchOneUser = useCallback(async () => {
        const u_id = localStorage.getItem('user_id')
        try {
            console.log(`Search Id is ${u_id}`) 
            const req = {
                method: c.get,
                url: `${c.url}/api/user/${u_id}`,
                auth: c.auth
            }

            const res = await axios(req)  
            setData(res.data)
        } catch (error) {
            console.log(`Error ${error}`) 
            alert('failed')
        }
    }) // 혹시 안되면 ) 전에 [] 더할것

    return (
    <>
    <form>
        <table>
            
            <td>
            <h3>회원정보 수정</h3>
                <div class={classes.title}>
                    <h3>회원정보 수정</h3>
                </div>
            </td>
        </table>
    </form>
        <h2>{sessionUser_id}</h2>
        <User/>
    </>)
    
}


export default UserUpdate