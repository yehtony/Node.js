import React from 'react';
import './signin.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
//import { promise } from '../../express/server/config/db';
//import { useNavigation } from 'react';



function Signin() {
    //const { user, setUser } = useState('E-mail', 'Password');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login = () => {
        setEmail(document.getElementById('email').value);
        setPassword(document.getElementById('password').value);
        function fetchData() {
            if (email !== "" && password !== "") {
                fetch("http://localhost:3001/signin", {
                    method: "POST",
                    //body: JSON.stringify({ email: 'yexuanncu@gmail.com', password: '110524031'})
                })
                    .then(function (response) {
                        console.log(response);
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                    })
                    .catch(function (err) {
                        console.log(err);
                    })

                // axios
                //     .post("http://localhost:3001/signin", {
                //         email: email,
                //         password: password,
                //     })
                //     .then((res) => {
                //         alert("登入成功!");
                //         //navigate("/home");
                //     })
                //     .catch((e) => {
                //         if (e.response.error)
                //             alert("帳號或密碼錯誤！");
                //     });
            } else if (email === "") {
                alert("請輸入帳號!");
            } else {
                alert("請輸入密碼!");
            }
        }
        fetchData();
    }
    // const login = () => {
    //     setEmail(document.getElementById('email').value);
    //     setPassword(document.getElementById('password').value);
    //     if (email !== "" && password !== "") {
    //         axios
    //             .post("http://localhost:3001/signin", {
    //                 email: email,
    //                 password: password,
    //             })
    //             .then((res) => {
    //                 alert("登入成功!");
    //                 //navigate("/home");
    //             })
    //             .catch((e) => {
    //                 if (e.response.error)
    //                     alert("帳號或密碼錯誤！");
    //             });
    //     } else if (email === "") {
    //         alert("請輸入帳號!");
    //     } else {
    //         alert("請輸入密碼!");
    //     }
    //     // async function fetchData() {
    //     //     let res = await fetch("http://localhost:3001/signin")
    //     //     let data = await res.json()
    //     //     console.log(data)
    //     // }
    //     // fetchData()
    // };
    return (
        // <form>
        <fieldset className='container'>
            <legend className='title'>Sign In</legend>
            <div className='signin'>
                <div className='email'>E-mail: <input type='text' id='email' name='email' placeholder=' type your email' /></div>
                <div className='password'>Password:<input type='password' id='password' name='password' placeholder=' type your password' /><div className='showpassword'>show password<input type='checkbox' id='showpassword' onChange={() => Showpassword()} /></div></div>
            </div>
            <div><button className='button b1' type='submit' onClick={() => Login()}> Sign In</button></div>
            <div className='other'>
                <button className='button b2'>forget password?</button>
                <button className='button b3'>Unregistered?</button>
            </div>
        </fieldset>
        // </form >
    )
}

function Showpassword() {
    if (document.getElementById('showpassword').checked === true) {
        document.getElementById('password').type = 'text';
    }
    else
        document.getElementById('password').type = 'password';
}

export default Signin;