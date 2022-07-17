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


function Layout(props) {
    // const navigate = useNavigate()
    const [board, setBoard] = useState([
        { id: nanoid(), board: 'Todoweb' },
        { id: nanoid(), board: 'Todolist' }
    ]);
    return (
        <div className="layout">
            <nav>
                <Link to='..'><button className='hbn todoweb' data-stroke="TodoWeb"><BsCalendar4Range className='icon' />TodoWeb</button></Link>
                <Link to='../workspace'><button>Workspace</button></Link>
                <Link to='../board'><button>Board</button></Link>
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