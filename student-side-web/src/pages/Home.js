import React, { useEffect } from "react";
import { useState } from "react";
import GreetingHeading from "../components/GreetingHeading";
import SettingsButton from "../components/SettingsButton";
import { NoStudentInClass, UserIcon, noResultsIcon } from "../assets/Icons";
import { testData } from "../data/repository";

const Home = () => {

    // Get user role
    const userRole = localStorage.getItem('userRole');
    // const [schools, setSchools] = useState([]);
    // const data = testData();
    // useEffect(() => {
    //     const loadSchools = async () => {
    //         const schools = await data;
    //         setSchools(schools.map(school => <div>{school.schoolName}<br/></div>));
    //     }
    //     loadSchools();
    // }, []);

    // console.log(schools);


    // state variable for selecting from professor's classes
    const [selectedClass, setSelectedClass] = useState('');

    const handleClassChange = classCode => {
        setSelectedClass(classCode);
    }

    return ( userRole === 'Student' ?
    <div className="page">
        <div className="top-row">
            {/* <div>{schools}</div> */}
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
                Choose the song and exercise to display the metrics of your performance
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
    : 
    <div className="page">
        <div className="top-row">
            <GreetingHeading heading='Welcome, Professor!' />
            <SettingsButton />
        </div>

        <div className="class-time-rehearsed-container">
            <div className="class-time-rehearsed-leftside">
                <div className="class-time-rehearsed-title">
                    Average Class Time Rehearsed: Class Name
                </div>
                <div className="class-time-rehearsed-description">
                    Here you can see the overall time rehearsed 
                </div>
            </div>

            <div className="class-time-rehearsed-rightside">
                <div className="class-time-rehearsed-rightside-item">
                    TODAY
                    <div className="class-time-rehearsed">02:14 hr</div>
                    AVERAGE
                </div>

                <div className="class-time-rehearsed-rightside-item">
                    WEEKLY
                    <div className="class-time-rehearsed">12:02 hr</div>
                    AVERAGE
                </div>

                <div className="class-time-rehearsed-rightside-item">
                    TOTAL
                    <div className="class-time-rehearsed">14:16 hr</div>
                    AVERAGE
                </div>
            </div>
        </div>

        <div className='professor-home-content'>
            <div className="your-classes">
                <div>Your Classes:</div>
                <div className="class-list">
                    <div className={selectedClass === "J30DN3" ? "class-container selected-class" : "class-container"} onClick={() => handleClassChange("J30DN3")}>
                        <div className="class-title">Class Name</div>
                        <div className="join-hint">Students can join this class with this code</div>
                        <div className="class-code">J30DN3</div>
                        <div className="change-code-button">CHANGE</div>
                    </div>
                    <div className={selectedClass === "JS93N8" ? "class-container selected-class" : "class-container"} onClick={() => handleClassChange("JS93N8")}>
                        <div className="class-title">Class Name</div>
                        <div className="join-hint">Students can join this class with this code</div>
                        <div className="class-code">JS93N8</div>
                        <div className="change-code-button">CHANGE</div>
                    </div>
                    <div className={selectedClass === "L49FH7" ? "class-container selected-class" : "class-container"} onClick={() => handleClassChange("L49FH7")}>
                        <div className="class-title">Class Name</div>
                        <div className="join-hint">Students can join this class with this code</div>
                        <div className="class-code">L49FH7</div>
                        <div className="change-code-button">CHANGE</div>
                    </div>
                </div>
            </div>

            {selectedClass === "" ? 
                <div className="no-class-selected">
                    <div className="title">Please share code with classroom!</div>
                    <NoStudentInClass />
                    Once added this page wil display your students’ overall progress.
                </div>
            :
                <div className="class-rankings">
                    <div className="bottom-rankings">Bottom Rankings: Overall Evaluation
                        <table className="bottom-rankings-table">
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Last Change</th>
                                <th>Intonation</th>
                                <th>Blend</th>
                                <th>Articulation</th>
                                <th>Dynamics</th>
                                <th>Tempo</th>
                                <th>Rhythm</th>
                                <th>Results</th>
                            </tr>
                        </table>
                    </div>
                    <div className="top-rankings">Top Rankings: Overall Evaluation
                        <table className="bottom-rankings-table">
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Last Change</th>
                                <th>Intonation</th>
                                <th>Blend</th>
                                <th>Articulation</th>
                                <th>Dynamics</th>
                                <th>Tempo</th>
                                <th>Rhythm</th>
                                <th>Results</th>
                            </tr>
                        </table>
                    </div>
                </div>
            }

        </div>
    </div>
    )
}

export default Home;
