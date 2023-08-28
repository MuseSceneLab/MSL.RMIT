import React from 'react';
import { SettingsIcon } from '../assets/Icons';

const SettingsButton = () => {
    return (
    <a href='/settings'>
        <div className='settings-button'>
            <SettingsIcon />
            Settings
        </div>
    </a>
    )
}

export default SettingsButton;
