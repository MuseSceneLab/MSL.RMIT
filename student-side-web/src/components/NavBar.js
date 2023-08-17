import React from 'react';
import { HomeIcon, StudioIcon, InboxIcon, LibraryIcon, MSLLogo } from '../assets/Icons.js';
import LogoutButton from './LogoutButton.js';

const NavBar = () => {

    const [itemSelected, setItemSelected] = React.useState('Home');

    const selectItem = (item) => {
        setItemSelected(item);
    }

    return (
    <>

        <img src={MSLLogo} alt='Muse Scene Lab Logo' className='nav-bar-logo' />

        <div className='nav-bar d-flex flex-column'>
            <a className={itemSelected === 'Home' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='#' onClick={()=>selectItem('Home')}>
                <HomeIcon />
                Home
            </a>

            <a className={itemSelected === 'Studio' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='#' onClick={()=>selectItem('Studio')}>
                <StudioIcon />
                Studio
            </a>

            <a className={itemSelected === 'Inbox' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='#' onClick={()=>selectItem('Inbox')}>
                <InboxIcon />
                Inbox
            </a>

            <a className={itemSelected === 'Library' ? 'nav-bar-item item-selected' : 'nav-bar-item'} href='#' onClick={()=>selectItem('Library')}>
                <LibraryIcon />
                Library
            </a>
        </div>

        <LogoutButton />
    </>
    );
}

export default NavBar;