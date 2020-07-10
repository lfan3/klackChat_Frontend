import React, {useReducer, useState} from 'react';
import FormRender from './FormRender'
import {Redirect} from 'react-router-dom'


export default function Form(props){
    const dispatch = props.dispatch
    const state = props.state

    const handleChange = (e)=>{
        let target = e.target
        let name = target.name
        let value = target.value
        dispatch({type:'input', name, value})
    }
    let redirect = props.registered
    return(
        <div>
        {redirect && props.url == '/register'
        ? (<Redirect to='/auth'/>) 
        : (<FormRender
            handleSubmit = {props.handleSubmit}
            btnText = {props.btnText}
            handleChange = {handleChange}
            {...state}
        />)
        }
        </div>

    )
}    

