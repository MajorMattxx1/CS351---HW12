import React from 'react';
import ReactDOM from 'react-dom';


function Login() {
    return <main className = "gridy">
            <h1>Fremont Cheese Sniffers</h1>
            <div id="messsage"></div>
            <form>
                <label htmlFor="username">Username </label> 
                <input type="text" name="username" id="username" required>
                </input>
            </form>
            <form>
                <label htmlFor="password">Password </label> 
                <input type="password" name="password" id="password" required>
                </input>
            </form>
            <button name= "Login Button" id="loginButton">Login</button>
        </main>
    }

export default Login;