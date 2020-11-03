import React, {useEffect, useCallback, useState} from 'react'
import {User} from '../../template'
import {useHistory } from "react-router-dom";
import { context as c } from '../../context'
import axios from 'axios'

// import {User} from '../../template'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
  
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
 

const UserProfile = () => {
  const classes = useStyles();
    // const [userid, setUserid] = useState()
    
  const [password, setPassword] = useState()
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [data, setData] = useState([])


  const fetchOneUser = useCallback(async () => {
      const u_id = sessionStorage.getItem('sessionUser')
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
    })
    useEffect(() => {fetchOneUser()},[])


    // const SignupButton = (e) => {
    //   e.preventDefault()
    //   alert(`fname: ${fname} lname: ${lname} email : ${email} age :${age} gender: ${gender}  password : ${password}`)
    // }
    // alert('회원가입 완료')
    return <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          회원정보
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              Last Name
            </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={(data['lname'])}
                name="lastName"
                autoComplete="lname"
                onChange={e => {setLname(`${e.target.value}`)}}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              First Name
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label= {data['fname']}
                autoFocus
                onChange={e => {setFname(`${e.target.value}`)}}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm ={6}>
              Email/ID
            </Grid>
            <Grid item xs={12} sm ={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label={data['user_id']}
                name="email"
                autoComplete="email"
                onChange={e => {setEmail(`${e.target.value}`)}}
                disabled
              />
            </Grid>

            <Grid item xs={12} sm ={6}>
              Password
            </Grid>

            <Grid item xs={12} sm ={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                onChange={e => {setPassword(`${e.target.value}`)}}
                defaultValue = "**********"
                disabled
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              Gender
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="gender"
                label={(data['gender'])}
                type="gender"
                id="gender"
                autoComplete="current-gender"
                onChange={e => {setGender(`${e.target.value}`)}}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              Age
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="age"
                label={(data['age'])}
                type="age"
                id="age"
                autoComplete="current-age"
                onChange={e => {setAge(`${e.target.value}`)}}
                disabled
                
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //onClick ={Register}
          >
            Sign Up Here
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Go back to Home
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    </>
}
export default UserProfile