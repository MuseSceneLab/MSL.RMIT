import React, { useEffect, useState } from 'react';

/**
 * A toggle switch component that can be turned on or off.
 * @param {boolean} switchStatus - The initial status of the toggle switch.
 * @returns {JSX.Element} - The toggle switch component.
 */
const ToggleSwitch = (switchStatus) => {

    const [isOn, setIsOn] = useState(switchStatus);

    /**
     * Toggles the switch status between on and off.
     */
    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    useEffect(() => {
        console.log(isOn);
    }, [isOn])

    /**
     * The toggle switch component.
     * @returns {JSX.Element} - The toggle switch component.
     */
    return (
        <div className={isOn ? 'switch-container-on' : 'switch-container-off'} onClick={toggleSwitch} >
            <div className={isOn ? 'switch-toggle-on' : 'switch-toggle-off'}></div>
        </div>
    )
}

export default ToggleSwitch;