import React from 'react';
import { LogOutIcon } from '../assets/Icons.js';

const LogoutButton = () => {
    return (
    <>
        <a className='logout-button' href='#'>
            <LogOutIcon />
            Logout
        </a>
    </>
    )
}

export default LogoutButton;