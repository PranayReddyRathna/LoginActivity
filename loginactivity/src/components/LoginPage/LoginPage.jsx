import React, { useState } from 'react'

const LoginPage = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState(false);
    const [error,setError]=useState(false);
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleUsername(e){
        setUsername(e.target.value);
    }
    function handleCheck(e){
        e.preventDefault();
        console.log(username,password);
        if(username==="user" && password==="password"){
            setMsg(true);
        }
        else{
           setError(true);
        }
    }
  return (
    <div>
        <h1>Login Page</h1>
        {error && <div>Invalid username or password</div> }
        <div>
        {msg ? <div>Welcome, user</div> :
        <form onSubmit={handleCheck}>
            <label>Username:</label>
            <input onChange={handleUsername} required/>
            <br/>
            <label>Password:</label>
            <input onChange={handlePassword} required/>
            <br/>
            <button>Submit</button>
        </form>
        }
        </div>
    
    </div>
  )
}

export default LoginPage