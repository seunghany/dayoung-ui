import axios from 'axios'
// import {Actor} from '../../../template'  // 아직 없음
import React, {useState} from 'react'
import {Actor} from '../../template'


// Columns = [userid,password,name,age,dateOfBirth,gender]
const ActorHome = () => {
    const [photoUrl, setPhotoUrl] = useState()
    const [actorid, setActorid] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [realName, setRealName] = useState()
    const [spouse, setSpouse] = useState()
    const [children, setChildren] = useState()
    const [debutYear, setDebutYear] = useState()
    const [agency, setAgency] = useState()
    const [religion, setReligion] = useState()
    return(<>
    <h1>Actor Home</h1>
    <Actor/>
    </>)
}


export default ActorHome