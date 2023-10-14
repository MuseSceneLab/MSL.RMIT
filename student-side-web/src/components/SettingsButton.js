

/**
 * A button component that links to the settings page.
 * @returns {JSX.Element} The SettingsButton component.
 */
import React from 'react';
import { SettingsIcon } from '../assets/Icons';

const SettingsButton = () => {
    return (
    <a href='/MSL.RMIT/#/settings'>
        <div className='settings-button'>
            <SettingsIcon />
            Settings
        </div>
    </a>
    )
}

export default SettingsButton;
