import React from 'react';
import '../style/register.css'

export default function FormRender(props){
    const {
        pseudo, 
        password, 
        email, 
        message, 
        error, 
        handleChange, 
        handleSubmit,
    } = props;

    return(
        <form  onSubmit = {handleSubmit}>
            <div className="form-group">
            <label htmlFor="pseudo">Pseudo</label>
            <input 
                type="text" 
                className="form-control" 
                id="pseudo"  
                name = "pseudo"
                placeholder="Enter Pseudo"
                value = {pseudo}
                onChange = {handleChange}
                />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                id="email"  
                name = "email"
                placeholder="Enter Email"
                value = {email}
                onChange = {handleChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                name = 'password'
                placeholder="Password"
                value = {password}
                onChange = {handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary" >{btnText}</button>
            <div>
                {error && JSON.stringify(error)}
                {message}
            </div>
        </form>
    )
}