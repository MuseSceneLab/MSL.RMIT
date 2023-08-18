import React from "react";
import { useState } from "react";
import GreetingHeading from "../components/GreetingHeading";
import SettingsButton from "../components/SettingsButton";
import { noResultsIcon } from "../assets/Icons";

const Home = () => {

    const [statsResults, setStatsResults] = useState([]);


    return (
    <div className="home-page">
        <div className="home-top-row d-flex">
            <GreetingHeading heading='Welcome {Student Name}' />
            <SettingsButton />
        </div>

        <div className="time-rehearsed-container">
            <div className="time-rehearsed-leftside">
                <div className="time-rehearsed-title">
                    Time Rehearsed
                </div>
                <div className="time-rehearsed-description">
                    Congrats! Here you can see the overall time rehearsed
                </div>
            </div>

            <div className="time-rehearsed-rightside">
                <div className="time-rehearsed-rightside-item">
                    TODAY
                    <div className="time-rehearsed">02:14 hr</div>
                </div>

                <div className="time-rehearsed-rightside-item">
                    WEEKLY
                    <div className="time-rehearsed">12:02 hr</div>
                </div>

                <div className="time-rehearsed-rightside-item">
                    TOTAL
                    <div className="time-rehearsed">14:16 hr</div>
                </div>
            </div>
        </div>

        <div className='reminders'>
            <div className='reminders-title'>
                Reminders
            </div>
            <div className='reminders-description'>
                It's been &#123;x&#125; number of days since you last practices. Keep practicing to improve your skills.
            </div>
        </div>

        <div className='your-statistics'>
            <div className='your-statistics-title'>
                Your Statistics
            </div>
            <div className='your-statistics-description'>
                Choose the song and exercise to display tje metrics of your performance
            </div>
        </div>

        <form className='your-statistics-form'>
            <select className='song-drop-down'>
                <option value=''>Select a song</option>
                <option value='song1'>Song 1</option>
                <option value='song2'>Song 2</option>
                <option value='song3'>Song 3</option>
            </select>

            <select className='exercise-drop-down'>
                <option value=''>Select an exercise</option>
                <option value='exercise1'>Exercise 1</option>
                <option value='exercise2'>Exercise 2</option>
                <option value='exercise3'>Exercise 3</option>
            </select>

            <div className='your-statistics-submit'>Show your results</div>
        </form>

        <div className='your-statistics-results'>
            <div className='no-result'>
                <div className='no-result-title'>Oops, there is nothing to display here!</div>
                <img className='no-result-image' src={noResultsIcon} alt='no results' />
                <div className='no-result-description'>Please select a song and exercise in order for us to display your metrics.</div>
            </div>
        </div>
    </div>
    )
}

export default Home;