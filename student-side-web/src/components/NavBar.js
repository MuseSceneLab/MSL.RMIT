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
            <a className={location === '/' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/'>
                <HomeIcon />
                Home
            </a>

            <a className={location === '/studio' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/studio'>
                <StudioIcon />
                Studio
            </a>

            <a className={location === '/inbox' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/inbox'>
                <InboxIcon />
                Inbox
            </a>

            <a className={location === '/library' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/library'>
                <LibraryIcon />
                Library
            </a>
        </div>

        <LogoutButton />
    </>
    );
}

export default NavBar;