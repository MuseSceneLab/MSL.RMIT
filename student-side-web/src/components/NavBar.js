

import React, { useEffect, useState } from 'react';
import { HomeIcon, StudioIcon, InboxIcon, LibraryIcon, MSLLogo, FAQIcon, StudentsIcon, GalleryIcon, AssignmentsIcon } from '../assets/Icons.js';
import LogoutButton from './LogoutButton.js';

/**
 * NavBar component that displays the navigation bar for the application
 * @function
 * @return {JSX.Element} The JSX code for the NavBar component
 */
const NavBar = () => {

    // Get current url location
    const location = window.location.pathname;
    const screenWidth = window.innerWidth;

    // Get user role ()
    // REPLACE THIS WITH DATABASE DETAILS
    const userRole = localStorage.getItem('userRole');

    // function for toggling navbar
    const [navBarExpanded, setNavBarExpanded] = useState(true);

    /**
     * toggleNavBar()
     * expand/collapse navbar
     * @function
     * @param {none}
     * @return {none}
     * @precondition none
     * @postcondition navbar is expanded/collapsed
     */
    const toggleNavBar = () => {
        setNavBarExpanded(!navBarExpanded);
        if (!navBarExpanded) {
            document.getElementsByClassName('nav-bar')[0].classList.add('nav-bar-hide');
            document.getElementsByClassName('nav-bar-logo')[0].classList.add('nav-bar-logo-hide');
            document.getElementsByClassName('nav-bar')[0].classList.remove('nav-bar-show');
            document.getElementsByClassName('nav-bar-logo')[0].classList.remove('nav-bar-logo-show');
            document.getElementsByClassName('hamburger')[0].classList.remove('hamburger-expanded');
            document.getElementsByClassName('hamburger-container')[0].classList.remove('hamburger-container-expanded');
        } else {
            document.getElementsByClassName('nav-bar')[0].classList.remove('nav-bar-hide');
            document.getElementsByClassName('nav-bar-logo')[0].classList.remove('nav-bar-logo-hide');
            document.getElementsByClassName('nav-bar')[0].classList.add('nav-bar-show');
            document.getElementsByClassName('nav-bar-logo')[0].classList.add('nav-bar-logo-show');
            document.getElementsByClassName('hamburger')[0].classList.add('hamburger-expanded');
            document.getElementsByClassName('hamburger-container')[0].classList.add('hamburger-container-expanded');
        }
    }

    // useEffect for updating location
    useEffect(() => {}, [location, navBarExpanded]);

    return ( userRole === 'Student' ?
    // student navbar
    <>

    <img src={MSLLogo} alt='Muse Scene Lab Logo' className='nav-bar-logo nav-bar-logo-hide' />
        <div className='hamburger-container' onClick={toggleNavBar}>
            <div className={screenWidth > 1000 ? "d-none" : "hamburger"}></div>
        </div>

        <div className='nav-bar d-flex flex-column'>
            <a className={location === '/home' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/home/'>
                <HomeIcon />
                Home
            </a>

            <a className={location === '/studio' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/studio/'>
                <StudioIcon />
                Studio
            </a>

            <a className={location === '/inbox' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/inbox/'>
                <InboxIcon />
                Inbox
            </a>

            <a className={location === '/library' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/library/'>
                <LibraryIcon />
                Library
            </a>

            <a className={location === '/faq' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/faq/'>
                <FAQIcon />
                Help
            </a>
        </div>

        <LogoutButton logoutButtonHidden={navBarExpanded ? false : true} />
    </>
    :
    // teacher navbar
    <>
        <img src={MSLLogo} alt='Muse Scene Lab Logo' className='nav-bar-logo nav-bar-logo-hide' />
        <div className='hamburger-container' onClick={toggleNavBar}>
            <div className={screenWidth > 1000 ? "d-none" : "hamburger"}></div>
        </div>

        <div className='nav-bar nav-bar-hide d-flex flex-column'>
            <a className={location === '/home' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/home/'>
                <HomeIcon />
                Home
            </a>

            <a className={location === '/students' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/students/'>
                <StudentsIcon />
                Students
            </a>

            <a className={location === '/assignments' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/assignments/'>
                <AssignmentsIcon />
                Assignments
            </a>

            <a className={location === '/gallery' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/gallery/'>
                <GalleryIcon />
                Gallery
            </a>

            <a className={location === '/inbox' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/inbox/'>
                <InboxIcon />
                Inbox
            </a>

            <a className={location === '/faq' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='/MSL.RMIT/#/faq/'>
                <FAQIcon />
                Help
            </a>
        </div>

        <LogoutButton logoutButtonHidden={navBarExpanded ? false : true} />
    </>
    );
}

export default NavBar;