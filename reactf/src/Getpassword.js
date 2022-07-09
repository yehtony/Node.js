import React from 'react';
import './Signin.scss';
//import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//import { promise } from '../../express/server/config/db';
//import { useNavigation } from 'react';



function Getpassword() {
    const navigate = useNavigate();
    //const { user, setUser } = useState('E-mail', 'Password');
    const Login = () => {
        async function FetchData() {
            let email = await document.getElementById('email').value;
            // let password = await document.getElementById('password').value;
            if (email !== "") {
                async function PostData() {
                    fetch("http://localhost:3001/getpassword", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: email })
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then(data => {
                            // console.log(data[Object.keys(data)[0]]);
                            alert(data[Object.keys(data)[0]]);
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
        <form onSubmit={Login}>
            <fieldset className='container'>
                <legend className='title'>Get Password</legend>
                <div className='signin'>
                    <fieldset className='field'><legend>E-mail</legend><input type='text' id='email' name='email' placeholder='type your email' /></fieldset>
                </div>
                <div><button className='button b1' type='submit'>Send Email</button></div>
                {/* <div className='other'>
                    <button className='button b2' type='button'>forget password?</button>
                    <button className='button b3' type='button' onClick={() => navigate('/signup')}>Unregistered?</button>
                </div> */}
            </fieldset >
        </form >
    )
}

// function Showpassword() {
//     if (document.getElementById('showpassword').checked === true) {
//         document.getElementById('password').type = 'text';
//     }
//     else
//         document.getElementById('password').type = 'password';
// }

export default Getpassword;