import React from 'react';
import './Homepage.scss';
//import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Homepage() {
    const location = useLocation(); //to get location and state from navigate
    return (
        <p>{location.state.email}</p>
    )
}

export default Homepage;