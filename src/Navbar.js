import React, { useState } from 'react'
import './Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

function Navbar() {
    const [user,setUser]=useState('')
    return (
        <div className="navbar">
            <div className="navbar__title">
                <h1>Title</h1>
            </div>
            <div className="navbar__links">
                <div className="navbar__link">
                    <HomeIcon/>
                    <h3>Home</h3>
                </div>
                <div className="navbar__link">
                    <SearchIcon/>
                    <h3>Search</h3>
                </div>
                <div className="navbar__link">
                    <CreateIcon/>
                    <h3>New Question</h3>
                </div>
                <div className="navbar__link">
                {user===''?
                <>
                <MeetingRoomIcon/>
                <h3>Logout</h3>
                </>
                :
                <>
                <ExitToAppIcon/>
                <h3>Login</h3>
                </>
                }
                </div>
            </div>
        </div>
    )
}

export default Navbar
