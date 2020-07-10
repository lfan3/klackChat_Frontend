import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Chat from './components/Chat'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import AuthForm from './components/AuthForm'

class App extends React.Component{
    render(){
        return(
        <Router>
            <Route path = "/" exact component={Home}/>
            <Route path = "/register" component = {RegisterForm}/>
            <Route path = "/auth" component = {AuthForm}/>
            <Route path = "/chat" component={Chat}/>
        </Router>
        )
    }
}

export default App