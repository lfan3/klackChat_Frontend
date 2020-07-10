import React, {useReducer} from 'react'
import Form from './Form'
import {initialState} from './initState'
import formReducer from './formReducer'

const API_URL = 'http://localhost:5000'

export default function RegisterForm(props){
    const [state, dispatch] = useReducer(
        formReducer,
        initialState
    )
    const handleRegister = (e)=>{
        e.preventDefault()
        dispatch({type:'submit'})
        console.log(JSON.stringify(state));
        let options = {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state )
        }
        fetch(`${API_URL}/users/register`, options)
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status == "success"){
                dispatch({type: 'cleanError'})
                dispatch({type: 'registered'})
            }
            dispatch({type:'updateMessage', message: res.message})
        })
        .catch((err)=> initialState.error = err)
    }
    return(
        <Form 
        handleSubmit = {handleRegister} 
        btnText='Register' 
        url={props.match.url}
        registered = {state.registered}
        dispatch = {dispatch}
        />
    )
}