import React from 'react';
import GreetingHeading from "../components/GreetingHeading";
import { UserIcon, categoryTitle } from "../assets/Icons.js";

const Students = () => {

    const userRole = localStorage.getItem('userRole');

    return (
    <div className="page">
        <div className="top-row">
            <GreetingHeading heading='Students Tab' />
            <div><UserIcon /> {/* You can add userRole here if needed */}</div>
        </div>
        {/* Rest of your component content */}
    </div>
    );
}

export default Students;