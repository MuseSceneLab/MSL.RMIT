import React, { useEffect, useState } from 'react';


const ToggleSwitch = (switchStatus) => {

    const [isOn, setIsOn] = useState(switchStatus);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    useEffect(() => {
        console.log(isOn);
    }, [isOn])


    return (
        <div className={isOn ? 'switch-container-on' : 'switch-container-off'} onClick={toggleSwitch} >
            <div className={isOn ? 'switch-toggle-on' : 'switch-toggle-off'}></div>
        </div>
    )
}

export default ToggleSwitch;