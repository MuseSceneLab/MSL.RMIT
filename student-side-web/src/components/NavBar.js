import React, { useEffect } from 'react';
import { HomeIcon, StudioIcon, InboxIcon, LibraryIcon, MSLLogo } from '../assets/Icons.js';
import LogoutButton from './LogoutButton.js';

const NavBar = () => {

    const location = window.location.pathname;

    useEffect(() => {}, [location]);

    return (
    <>

        <img src={MSLLogo} alt='Muse Scene Lab Logo' className='nav-bar-logo' />

        <div className='nav-bar d-flex flex-column'>
            <a className={location === '/student-home' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/student-home'>
                <HomeIcon />
                Home
            </a>

            <a className={location === '/student-studio' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/student-studio'>
                <StudioIcon />
                Studio
            </a>

            <a className={location === '/student-inbox' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/student-inbox'>
                <InboxIcon />
                Inbox
            </a>

            <a className={location === '/student-library' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/student-library'>
                <LibraryIcon />
                Library
            </a>
        </div>

        <LogoutButton />
    </>
    );
}

export default NavBar;