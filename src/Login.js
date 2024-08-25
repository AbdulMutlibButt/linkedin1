import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='Login'>
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-blue-png-large-size.png' />
            <form>
                <input placeholder='Full name (required if registering)' type='text' />
                <input placeholder='Profile pic URL (optional)' type='text' />
                <input placeholder='Email' type='email' />
                <input placeholder='Password' type='password' />
                <button>Sign In</button>
            </form>
            <p>Not a member?
                
            </p>
        </div>
    )
}

export default Login