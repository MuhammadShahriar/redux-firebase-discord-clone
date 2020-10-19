import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import React from 'react'
import './Login.css'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className = "login" >
            <div className = "login__logo">
                <img
                    src = "https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color-760x272.png"
                    alt = ""
                />
            </div>

            <Button onClick = {signIn} >
                Sing In
            </Button>
        </div>
    )
}

export default Login
