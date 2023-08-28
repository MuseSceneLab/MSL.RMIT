import React, { useEffect } from 'react';
import { HomeIcon, StudioIcon, InboxIcon, LibraryIcon, MSLLogo, FAQIcon } from '../assets/Icons.js';
import LogoutButton from './LogoutButton.js';

const NavBar = () => {

    // Get current url location
    const location = window.location.pathname;

    // useEffect for updating location
    useEffect(() => {}, [location]);

    return (
    <>

        <img src={MSLLogo} alt='Muse Scene Lab Logo' className='nav-bar-logo' />

        <div className='nav-bar d-flex flex-column'>
            <a className={location === '/home' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/home'>
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

            <a className={location === '/faq' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/faq'>
                <FAQIcon />
                Help
            </a>
        </div>

        <LogoutButton />
    </>
    );
}

export default NavBar;