import './Topbar.scss';
import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const TopbarUser = ({ user }) => {
    const expandList = () => {
        return (
            <div>
                <input type="checkbox" id="topbaruser"></input>
                <button className='btntopbar user'><label for="topbaruser" className='labeltopbar user'><FaRegUserCircle className='icon' />{user}</label></button>
                <table className="topbartable">
                    <thead>
                        <tr className="topbar user"><td>Account</td></tr>
                    </thead>
                    <tbody>
                        <tr className="topbar user"><td>yexuanncu@gmail.com</td></tr>
                        <tr className="topbar user"><td>Profile</td></tr>
                        <tr className="topbar user"><td>Setting</td></tr>
                        <tr className="topbar user"><td>Log out</td></tr>
                    </tbody>
                </table>
            </div >
        )
    }
    return (
        <div>
            {expandList()}
        </div>
    )
}

export default TopbarUser;