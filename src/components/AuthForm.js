import React from 'react'
import Form from './Form'


const API_URL = 'http://localhost:5000'

export default function AuthForm(){
    const [state, dispatch] = useReducer(
        formReducer,
        initialState
    )
    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch({type:'submit'})
        //todo: error checker
        let options = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state)
        }
        fetch(`${API_URL}/users/authentication`, options)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.status, res.token)
            if(res.status =='success'){
                let token = res.token
                console.log(token, 'inside form')
                localStorage.set({'accessToken': token})
                dispatch({type:'updateJwtToken', data: token})
            }
        })
        .catch((err)=>console.log('error'))
    }
    return(
        <Form handleSubmit = {handleLogin} btnText='Authentication'/>
    )
}