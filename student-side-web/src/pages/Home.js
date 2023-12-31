
import { useState } from "react";
import GreetingHeading from "../components/GreetingHeading";
import SettingsButton from "../components/SettingsButton";
import { NoStudentInClass, noResultsIcon } from "../assets/Icons";
import TempoChart from "../components/TempoChart";
import { original, original2, performance1, performance1Second, performance2, performance2Second } from "../resources/metricsData";
import TimesCompletedChart from "../components/TimesCompletedChart";

/**
 * Home page component for student users
 * @returns {JSX.Element} Home page JSX element
 */
const Home = () => {

    // Get user role
    const userRole = localStorage.getItem('userRole');

    // Get user data
    const user = JSON.parse(localStorage.getItem('user')).body;

    // state variable for selecting from professor's classes
    const [selectedClass, setSelectedClass] = useState('');

    // state variable for displaying exercise metrics
    const [selectedExercise, setSelectedExercise] = useState('');

    // selection of metrics
    const [selectedMetrics, setSelectedMetrics] = useState("Intonation");

    // selection of evolution or last rehearsal
    const [selectedEvolution, setSelectedEvolution] = useState("Evolution");

    // for selecting history records
    const [selectedRecords, setSelectedRecords] = useState([]);

    // for zoom in and zoom out
    const [zoom, setZoom] = useState(2);

    /**
     * Function to handle selection of history records
     * @param {Object} e - Event object
     */
    const selectRecord = (e) => {
        if (e.target.checked) {
            setSelectedRecords([...selectedRecords, e.target.id]);
        } else {
            setSelectedRecords(selectedRecords.filter(record => record !== e.target.id));
        }
    }

    /**
     * Function to zoom in on exercise metrics chart
     */
    const zoomIn = () => {
        if (zoom < 5) {
            setZoom(zoom + 1);
        }
    }

    /**
     * Function to zoom out on exercise metrics chart
     */
    const zoomOut = () => {
        if (zoom > 1) {
            setZoom(zoom - 1);
        }
    }

    /**
     * Function to handle change of class code
     * @param {string} classCode - Selected class code
     */
    const handleClassChange = classCode => {
        setSelectedClass(classCode);
    }

    /**
     * Function to handle change of selected exercise
     */
    const handleExerciseChange = () => {
        const exercise = document.querySelector('.exercise-drop-down').value;
        setSelectedExercise(exercise);
    }

    /**
     * Function to handle change of selected metrics
     * @param {string} metrics - Selected metrics
     */
    const handleMetricsChange = metrics => {
        setSelectedMetrics(metrics);
    }

    /**
     * Function to handle change of selected evolution
     * @param {string} input - Selected evolution
     */
    const handleEvolutionChange = input => {
        setSelectedEvolution(input);
    }

    /**
     * Function to update exercise metrics chart
     */
    // TODO: implement this function
    const updateResults = () => {

    }


    return ( userRole === 'Student' ?
    <div className="page">
        <div className="top-row">
            {/* <div>{schools}</div> */}
            <GreetingHeading heading={`Welcome,  ${user.firstName}`} />
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

            <select className='exercise-drop-down' name="exercise" onChange={() => handleExerciseChange()}>
                <option value=''>Select an exercise</option>
                <option value={1}>Exercise 1</option>
                <option value={2}>Exercise 2</option>
                <option value={3}>Exercise 3</option>
                <option value={4}>Exercise 4</option>
                {/* <option value={3}>Exercise 3</option> */}
            </select>

            <div className='your-statistics-submit' onClick={updateResults}>Show your results</div>
        </form>

        <div className='your-statistics-results'>
            {selectedExercise !== '' ?
                <div className='statistics-container'>
                    <div className="d-flex">
                        <div className="d-flex me-5">
                            <div className={selectedMetrics === "Intonation" ? 'statistics-title-selected px-2' : 'statistics-title px-2'} onClick={() => handleMetricsChange("Intonation")}>Intonation</div>
                            <div className={selectedMetrics === "Blend" ? 'statistics-title-selected px-2' : 'statistics-title px-2'} onClick={() => handleMetricsChange("Blend")}>Blend</div>
                            <div className={selectedMetrics === "Articulation" ? 'statistics-title-selected px-2' : 'statistics-title px-2'} onClick={() => handleMetricsChange("Articulation")}>Articulation</div>
                            <div className={selectedMetrics === "Tempo" ? 'statistics-title-selected px-2' : 'statistics-title px-2'} onClick={() => handleMetricsChange("Tempo")}>Tempo</div>
                            <div className={selectedMetrics === "Dynamics" ? 'statistics-title-selected px-2' : 'statistics-title px-2'} onClick={() => handleMetricsChange("Dynamics")}>Dynamics</div>
                            <div className={selectedMetrics === "Rhythm" ? 'statistics-title-selected px-2' : 'statistics-title px-2'} onClick={() => handleMetricsChange("Rhythm")}>Rhythm</div>
                        </div>

                        <div className="d-flex evolution-last-rehearsal-switch">
                            <div className={selectedEvolution === "Evolution" ? "px-2 evolution-selected" : "px-2 evolution"} onClick={() => handleEvolutionChange("Evolution")}>Evolution</div>
                            <div className={selectedEvolution === "Last Rehearsal" ? "px-2 rehearsal-selected" : "px-2 rehearsal"} onClick={() => handleEvolutionChange("Last Rehearsal")}>Last Rehearsal</div>
                        </div>
                    </div>

                    <div>
                    {
                    selectedMetrics === "Tempo" && selectedExercise !== '' ? 
                        <div>
                            <div className="tempo-analysis">
                                <div>
                                    <TempoChart 
                                        originalData={original} 
                                        originalData2={original2} 
                                        exerciseData1={performance1}
                                        exerciseData1Performance2={performance1Second}
                                        exerciseData2={performance2} 
                                        exerciseData2Performance2={performance2Second}
                                        exercise={selectedExercise}
                                        selectedRecords={selectedRecords} 
                                        zoom = {zoom}
                                    /> 
                                    <div style={{width: "100%"}}>
                                        <div className='record-history-title'>Select History Records to Display (Up to 3):</div>
                                            <div className='chart-config'>
                                                <div className='record-history'>
                                                    <div className='record-group' onClick={selectRecord}>
                                                        <input type='checkbox' id='record1' value='record1'/>
                                                        <label htmlFor='record1'>08/09/2023 18:00</label>
                                                    </div>

                                                    <div className='record-group' onClick={selectRecord}>
                                                        <input type='checkbox' id='record2' value='record2' />
                                                        <label htmlFor='record2'>09/09/2023 18:00</label>
                                                    </div>
                                                </div>

                                            <div className='zoom-buttons'>
                                                <div className='zoom-in' onClick={zoomIn}>Zoom In</div>
                                                <div className='zoom-out' onClick={zoomOut}>Zoom Out</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tempo-rate">
                                    <div className="tempo-rate-title">Tempo Rate</div>
                                    <div className="latest-rate">Latest Rate: 65 BPM</div>
                                    <div className="average-rate">Average Rate: 60 BPM</div>
                                    <div className="times-completed">
                                        <div>Times Completed</div>
                                        <div className="times-completed-pie-chart">
                                            <TimesCompletedChart completed={2} failed={0} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : 
                        <div className="d=none"></div>
                    }
                    
                    </div>
                </div> 
                : 
                <div className='no-result'>
                    <div className='no-result-title'>Oops, there is nothing to display here!</div>
                    <img className='no-result-image' src={noResultsIcon} alt='no results' />
                    <div className='no-result-description'>Please select a song and exercise in order for us to display your metrics.</div>
                </div>
            }
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
