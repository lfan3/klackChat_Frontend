import React, {useReducer, useState, useEffect} from 'react'
import io from 'socket.io-client'

let socket;
function Chat(){
    //const pseudo = localStorage.getItem('pseudo')
    const ENDPOINT= 'http://localhost:5000'
    const pseudo = 'test'

    useEffect(()=>{
        socket = io(ENDPOINT)
        socket.emit('join', {pseudo}, ({error})=>{
            console.log(error)
        })
        return()=>{
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT])
    return(
        <h1>Chat</h1>
    )
}

export default Chat