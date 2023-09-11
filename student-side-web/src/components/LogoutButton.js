import React, { useEffect } from 'react';
import { LogOutIcon } from '../assets/Icons.js';

const LogoutButton = (props) => {

    // Get logout button hidden state
    const logoutButtonHidden = props.logoutButtonHidden;

    // useEffect for updating logout button hidden state
    useEffect(() => {}, [logoutButtonHidden]);

    return (
    <>
        <a className={logoutButtonHidden ? 'logout-button logout-button-show' : 'logout-button logout-button-hide'} href='/user-selection'>
            <LogOutIcon />
            Logout
        </a>
    </>
    )
}

export default LogoutButton;