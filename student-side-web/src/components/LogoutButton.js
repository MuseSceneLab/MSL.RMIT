import React, { useEffect } from 'react';
import { LogOutIcon } from '../assets/Icons.js';

const LogoutButton = (props) => {

    // Get logout button hidden state
    const logoutButtonHidden = props.logoutButtonHidden;

    // useEffect for updating logout button hidden state
    useEffect(() => {}, [logoutButtonHidden]);

    // handle logout
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('userRole');
        window.location.href = '/user-selection';
    }

    return (
    <>
        <a className={logoutButtonHidden ? 'logout-button logout-button-show' : 'logout-button logout-button-hide'} href='/user-selection'>
            <div onClick={handleLogout}>
                <LogOutIcon />
                Logout
            </div>
        </a>
    </>
    )
}

export default LogoutButton;