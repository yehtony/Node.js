import React from 'react';
import './Homepage.scss';
import Workspace from './Workspace';
import Board from './Board';
//import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SiHomebridge } from "react-icons/si";


function Layout(props) {
    // const navigate = useNavigate();
    return (
        <nav>
            <Link to='..'><button className='hbn todoweb' data-stroke="TodoWeb"><SiHomebridge className='icon' />TodoWeb</button></Link>
            <Link to='../workspace'><button>Workspace</button></Link>
            <Link to='../board'><button>Board</button></Link>
        </nav >
    )
}
function Homepage() {
    // const location = useLocation(); //to get location and state from navigate
    return (
        <Routes>
            <Route exact path='/' element={<Layout><Workspace /></Layout>} />
            <Route exact path='/workspace' element={<Layout><Workspace /></Layout>} />
            <Route exact path='/board' element={<Layout><Board /></Layout>} />
        </Routes>
    )
}

export default Homepage;