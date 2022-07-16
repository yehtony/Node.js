import React from 'react';
import './Signin.scss';
//import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Homepage from '../Homepage/Homepage'
//import { promise } from '../../express/server/config/db';
//import { useNavigation } from 'react';

function Signin() {
    const navigate = useNavigate();
    //const { user, setUser } = useState('E-mail', 'Password');
    const Login = (e) => {
        e.preventDefault(); //Important!! to prevent linkloop
        async function FetchData() {
            let email = await document.getElementById('email').value;
            let password = await document.getElementById('password').value;
            if (email !== "" && password !== "") {
                async function PostData() {
                    fetch("http://localhost:9000/signin", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: email, password: password })
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then(data => {
                            console.log(data[Object.keys(data)[0]]);
                            alert(data[Object.keys(data)[0]]);
                            if (data[Object.keys(data)[0]] === 'Login Successfully')
                                navigate('/homepage', { state: { email: email } })
                        })

                        .catch((err) => {
                            console.log(err);
                            alert(err);
                        })
                }
                PostData();
            } else if (email === "") {
                alert("Type Email !");
            } else {
                alert("Type Password !");
            }
        }
        FetchData();
    }
    // const login = () => {
    //     setEmail(document.getElementById('email').value);
    //     setPassword(document.getElementById('password').value);
    //     if (email !== "" && password !== "") {
    //         axios
    //             .post("http://localhost:9000/signin", {
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
    //     //     let res = await fetch("http://localhost:9000/signin")
    //     //     let data = await res.json()
    //     //     console.log(data)
    //     // }
    //     // fetchData()
    // };
    return (
        <form onSubmit={Login} >
            <fieldset className='container'>
                <legend className='title'>Sign In</legend>
                <div className='signin'>
                    <fieldset className='field'><legend>E-mail</legend><input type='text' id='email' name='email' placeholder='type your email' /></fieldset>
                    <fieldset className='field'><legend>Password</legend><input type='password' id='password' name='password' placeholder='type your password' /></fieldset>
                    <div className='showpassword'><input type='checkbox' id='showpassword' onChange={() => Showpassword()} />show password</div>
                </div>
                <div><button className='button b1' type='submit'> Sign In</button></div>
                <div className='other'>
                    <button className='button b2' type='button' onClick={() => navigate('/getpassword')}>forget password?</button>
                    <button className='button b3' type='button' onClick={() => navigate('/signup')}>Unregistered?</button>
                </div>
            </fieldset >
        </form >
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