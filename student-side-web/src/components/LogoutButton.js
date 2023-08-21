import React from 'react';
import { LogOutIcon } from '../assets/Icons.js';

const LogoutButton = () => {
    return (
    <>
        <a className='logout-button' href='/user-selection'>
            <LogOutIcon />
            Logout
        </a>
    </>
    )
}

export default LogoutButton;