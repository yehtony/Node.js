import React from 'react';
import './signin.scss';
//import { useState } from 'react';

function Signin() {
    //const { user, setUser } = useState('E-mail', 'Password');
    return (
        <body>
            <div>
                <form method='get'>
                    <fieldset className='container'>
                        <legend className='title'>Sign In</legend>
                        <div className='signin'>
                            <div className='email'>E-mail: <input type='text' name='email' placeholder=' type your email' /></div>
                            <div className='password'>Password:<input type='password' id='password' name='password' placeholder=' type your password' /><div className='showpassword'>show password<input type='checkbox' id='showpassword' onChange={() => Showpassword()} /></div></div>
                        </div>
                        <div><button className='button b1' type='submit'>Sign In</button></div>
                        <div className='other'>
                            <button className='button b2'>forget password?</button>
                            <button className='button b3'>Unregistered?</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </body>
    )
}

function Showpassword() {
    if (document.getElementById('showpassword').checked === true) {
        document.getElementById('password').type = 'text';
    }
    else
        document.getElementById('password').type = 'password';
}

function Checkuser() {
    
}

export default Signin;