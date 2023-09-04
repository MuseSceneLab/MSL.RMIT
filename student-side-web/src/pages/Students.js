import React, { useState } from 'react';
import GreetingHeading from "../components/GreetingHeading";
import { UserIcon, categoryTitle } from "../assets/Icons.js";
import '../index.css';
import FilterIcon from '../assets/filter.svg';

const Students = () => {
    const userRole = localStorage.getItem('userRole');
    const [selectedTab, setSelectedTab] = useState('First Name');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    }

    return (
        <div className="page">
            <div className="top-row">
                <GreetingHeading heading='Students Tab' />
                <div><UserIcon />{userRole}</div>
            </div>

            <div className="student-tabs-container">
                <select className="class-dropdown">
                    <option value="">Select Class</option>
                    {/* Add your class options here */}
                </select>

                <div
                    className={`tab ${selectedTab === 'First Name' ? 'active' : ''}`}
                    onClick={() => handleTabClick('First Name')}
                >
                    First Name
                </div>
                <div
                    className={`tab ${selectedTab === 'Last Name' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Last Name')}
                >
                    Last Name
                </div>
                <div
                    className={`tab ${selectedTab === 'Top' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Top')}
                >
                    Top
                </div>
                <div
                    className={`tab ${selectedTab === 'Bottom' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Bottom')}
                >
                    Bottom
                </div>
                <div
                    className={`tab ${selectedTab === 'To Grade' ? 'active' : ''}`}
                    onClick={() => handleTabClick('To Grade')}
                >
                    To Grade
                </div>

                {/* Filter Tab */}
                <div
                    className={`tab ${selectedTab === 'Filter' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Filter')}
                >
                    <img src={FilterIcon} alt="Filter" className="filter-icon" />
                </div>
            </div>
            {/* Render content based on the selected tab */}
            <div className="content">
                {selectedTab === 'First Name' && (
                    <div>
                        {/* Content for the "First Name" tab */}
                        {Array.from({ length: 5 }, (_, rowIndex) => (
                            <div key={rowIndex} className="student-row">
                                {/* Render 6 student boxes in each row */}
                                {Array.from({ length: 6 }, (_, index) => (
                                    <div key={index} className="student-box">
                                        {/* Student box content */}
                                        <p>First Name Last Name</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {selectedTab === 'Last Name' && (
                    <div>
                        {/* Content for the "Last Name" tab */}
                        {Array.from({ length: 5 }, (_, rowIndex) => (
                            <div key={rowIndex} className="student-row">
                                {/* Render 6 student boxes in each row */}
                                {Array.from({ length: 6 }, (_, index) => (
                                    <div key={index} className="student-box">
                                        {/* Student box content */}
                                        <p>Last Name, First Name</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {selectedTab === 'Top' && (
                    <div>
                        {/* Content for the "Top" tab */}
                        {Array.from({ length: 5 }, (_, rowIndex) => (
                            <div key={rowIndex} className="student-row">
                                {/* Render 6 student boxes in each row */}
                                {Array.from({ length: 6 }, (_, index) => (
                                    <div key={index} className="student-box">
                                        {/* Student box content */}
                                        <p>First Name Last Name</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {selectedTab === 'Bottom' && (
                    <div>
                        {/* Content for the "Bottom" tab */}
                        {Array.from({ length: 5 }, (_, rowIndex) => (
                            <div key={rowIndex} className="student-row">
                                {/* Render 6 student boxes in each row */}
                                {Array.from({ length: 6 }, (_, index) => (
                                    <div key={index} className="student-box">
                                        {/* Student box content */}
                                        <p>First Name Last Name</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {selectedTab === 'To Grade' && (
                    <div>
                        {/* Content for the "To Grade" tab */}
                        {Array.from({ length: 5 }, (_, rowIndex) => (
                            <div key={rowIndex} className="student-row">
                                {/* Render 6 student boxes in each row */}
                                {Array.from({ length: 6 }, (_, index) => (
                                    <div key={index} className="student-box">
                                        {/* Student box content */}
                                        <p>First Name Last Name</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {selectedTab === 'Filter' && (
                    <div>
                        {/* Content for the "Filter" tab */}
                        {Array.from({ length: 5 }, (_, rowIndex) => (
                            <div key={rowIndex} className="student-row">
                                {/* Render 6 student boxes in each row */}
                                {Array.from({ length: 6 }, (_, index) => (
                                    <div key={index} className="student-box">
                                        {/* Student box content */}
                                        <p>First Name Last Name</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Students;