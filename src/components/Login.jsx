import React,{useState} from 'react';
import { checkUsername,login } from "./getData";
import {useMutation} from 'react-query'
import {useNavigate} from 'react-router-dom'
import {Form,FormGroup,Input,Label,FormFeedback,Button} from "reactstrap"

export const Login=({setLoggedInUser})=> {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [isValidU,setIsValidU]=useState(null)
    const [isValidP,setIsValidP]=useState(null)
    const navigate=useNavigate()

    const mutationCheckUsername=useMutation(checkUsername, {
      onSuccess: (data)=>{
        console.log("szerver oldalról",data.data.rowCount,data.data.username)
        if(data.data.rowCount==0)
        setIsValidU(false)
        else
          setIsValidU(true)
      }
    })
    const handleCheckUsername=()=>{
      if(username)
        mutationCheckUsername.mutate({username:username})
      else
        setIsValidU(false)
    }
    const mutationLogin=useMutation(login,{
      onSuccess:(data)=>{
        console.log(data)
        if(data.data.rowCount==0)
        setIsValidP(false)
        else
        setIsValidP(true)
        setLoggedInUser(data.data.username)
        navigate('/')
      }
    })

  return (
    <Form className='login border p-3 shadow mt-1 rounded'>
        <h3>Login form</h3>
    <FormGroup>
    <Label for="username">Felhasználónév:</Label>
    <Input  value={username}
    autoFocus
        onChange={(e)=>setUsername(e.target.value)}
        className={isValidU==null? "" :( isValidU ? "is-valid" : "is-invalid")}
        onBlur={handleCheckUsername}
        onKeyPress={(e)=>e.key='Enter'? document.getElementById('password').focus() : ''}
        />
    <FormFeedback>Nem létező felhasználónév!</FormFeedback>
    </FormGroup>

    <FormGroup>
    <Label for="password">Jelszó:</Label>
    <Input value={password} type='password'
    id='password'
     className={isValidP==null? "" : (isValidP ? "is-valid" : "is-invalid")}
     onChange={(e)=>setPassword(e.target.value)}
     onKeyPress={(e)=>e.key='Enter'? document.getElementById('login').focus() : ''}
    />
    <FormFeedback valid>Sikeres bejelentkezés!</FormFeedback>
    </FormGroup>
    <div>
        <Button id='login' disabled={!isValidU || !password} color='dark' onClick={()=>mutationLogin.mutate({username:username,password:password})}>Login</Button>
    </div>
  </Form>
  )
}
