import React, { useEffect } from 'react';
import { HomeIcon, StudioIcon, InboxIcon, LibraryIcon, MSLLogo, FAQIcon, StudentsIcon, GalleryIcon, AssignmentsIcon } from '../assets/Icons.js';
import LogoutButton from './LogoutButton.js';

const NavBar = () => {

    // Get current url location
    const location = window.location.pathname;

    // Get user role ()
    // REPLACE THIS WITH DATABASE DETAILS
    const userRole = localStorage.getItem('userRole');

    // useEffect for updating location
    useEffect(() => {}, [location]);

    return ( userRole === 'student' ?
    // student navbar
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
    :
    // teacher navbar
    <>
        <img src={MSLLogo} alt='Muse Scene Lab Logo' className='nav-bar-logo' />

        <div className='nav-bar d-flex flex-column'>
            <a className={location === '/home' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/home'>
                <HomeIcon />
                Home
            </a>

            <a className={location === '/students' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/students'>
                <StudentsIcon />
                Students
            </a>

            <a className={location === '/assignments' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/assignments'>
                <AssignmentsIcon />
                Assignments
            </a>

            <a className={location === '/gallery' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/gallery'>
                <GalleryIcon />
                Gallery
            </a>

            <a className={location === '/inbox' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/inbox'>
                <InboxIcon />
                Inbox
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