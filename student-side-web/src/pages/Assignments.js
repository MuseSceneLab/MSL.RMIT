import React, { useState } from 'react';
import GreetingHeading from "../components/GreetingHeading";
import '../index.css';
import SettingsButton from '../components/SettingsButton';

/**
 * Assignments page component
 * @returns {JSX.Element} Assignments page JSX element
 */
const Assignments = () => {
    const userRole = localStorage.getItem('userRole');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Date'); // Initialize the default sorting option
    const [expandedRows, setExpandedRows] = useState({
        announcements: false,
        practiceExercises: false,
        groupPractices: false,
        quizzes: false,
        tests: false,
    });

    /**
     * Handle search input change
     * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
     */
    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    /**
     * Handle sort by click
     * @param {string} option - Sorting option
     */
    const handleSortByClick = (option) => {
        setSortBy(option);
    };

    /**
     * Handle row toggle
     * @param {string} rowName - Row name
     */
    const handleRowToggle = (rowName) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [rowName]: !prevState[rowName],
        }));
    };

    return (
        <div className="page">
            <div className="top-row">
                <GreetingHeading heading={`Welcome back, ${userRole}!`} />
                <SettingsButton />
            </div>
            <div className="search-row">
                <input
                    type="text"
                    placeholder="Search for Assignment"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    className="search-input"
                />
                <div className="tab-container">
                    <button
                        className={`tab${sortBy === 'Date' ? ' active' : ''}`}
                        onClick={() => handleSortByClick('Date')}
                    >
                        Sort by Date
                    </button>
                    <button
                        className={`tab${sortBy === 'Type' ? ' active' : ''}`}
                        onClick={() => handleSortByClick('Type')}
                    >
                        Sort by Type
                    </button>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
}

export default Assignments;