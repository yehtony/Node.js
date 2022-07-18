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
import { BsCalendar4Range } from "react-icons/bs";
import { nanoid } from 'nanoid';
import LeftbarCreate from './LeftbarCreate';
import LeftbarBoard from './LeftbarBoard';
import TopbarUser from './TopbarUser';


function Layout({ user }) {
    const navigate = useNavigate()
    // const location = useLocation();
    const [board, setBoard] = useState([
        { id: nanoid(), board: 'Todoweb' },
        { id: nanoid(), board: 'Todolist' }
    ]);

    return (
        <div className="layout">
            <nav>
                <button className='hbn todoweb' data-stroke="TodoWeb" onClick={() => navigate('..', { state: { user: user } })}><BsCalendar4Range className='icon' />TodoWeb</button>
                {/* <Link to='../workspace'><button>Workspace</button></Link>
                <Link to='../board'><button>Board</button></Link> */}
                <div className='user'><TopbarUser user={user} /></div>
            </nav >
            <div className='nav2'>
                {/* <button>Create<IoIosArrowDropdown className='icon ic1'></IoIosArrowDropdown></button>
                <input type='text' className='input in1 '></input> */}
                <LeftbarCreate createboard={setBoard}></LeftbarCreate>
                <LeftbarBoard board={board}></LeftbarBoard>
                {/* <button>Board<IoIosArrowDropdown className='icon ic2'></IoIosArrowDropdown></button> */}
            </div>
        </div>
    )
}

function Homepage() {
    const location = useLocation(); //to get location and state from navigate
    const [user, setUser] = useState(location.state.user);
    return (
        <Routes>
            <Route exact path='/' element={<Layout user={user}><Workspace /></Layout>} />
            <Route exact path='/workspace' element={<Layout user={user}><Workspace /></Layout>} />
            <Route exact path='/board' element={<Layout><Board /></Layout>} />
        </Routes>
    )
}

export default Homepage;