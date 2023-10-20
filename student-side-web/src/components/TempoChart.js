/**
 * A component that renders a tempo chart based on the provided data and exercise number.
 * @param {Object} props - The props object that contains the necessary data for rendering the chart.
 * @param {Array} props.originalData - The original tempo data.
 * @param {Array} props.exerciseData1 - The tempo data for the first performance of the exercise.
 * @param {Array} props.exerciseData1Performance2 - The tempo data for the second performance of the exercise.
 * @param {Array} props.originalData2 - The original tempo data for exercise 2, 3, and 4.
 * @param {Array} props.exerciseData2 - The tempo data for the first performance of exercise 2, 3, and 4.
 * @param {Array} props.exerciseData2Performance2 - The tempo data for the second performance of exercise 2, 3, and 4.
 * @param {string} props.exercise - The exercise number.
 * @param {Array} props.selectedRecords - The selected records.
 * @param {number} props.zoom - The zoom scale.
 * @returns {JSX.Element} - The tempo chart component.
 */
import { XYPlot, LineSeries, XAxis, YAxis, MarkSeries } from 'react-vis';


const TempoChart = (props) => {

    // original data
    const originalData = []

    // student performance data
    const exerciseData1 = []

    // student second performance data
    const exerciseData2 = []

    // dynamic data 
    const originalDynamics = []
    const perfomance1Dynamics = []
    const perfomance2Dynamics = []

    // initial reveal for exercise 3
    const initialReveal1 = {x: 0, y: 0}
    const initialReveal2 = {x: 0, y: 0}

    // exercise number
    const exercise = parseInt(props.exercise)

    // selected records
    const selectedRecords = props.selectedRecords

    // zoom scale
    const zoom = props.zoom

    // process data for exercise 1
    if (exercise === 1) {
        for (let i = 0; i < props.originalData.length; i++) {
            originalData.push({x: props.originalData[i][0] + (props.originalData[i][1] - 1)/2 , y: props.originalData[i][2]})
            originalDynamics.push({x: props.originalData[i][0] + (props.originalData[i][1] - 1)/2 , y: props.originalData[i][3] * 5})
        }

        for (let i = 0; i < props.exerciseData1.length; i++) {
            exerciseData1.push({x: props.exerciseData1[i][0] + (props.exerciseData1[i][1] - 1)/2 , y: props.exerciseData1[i][2]})
            perfomance1Dynamics.push({x: props.exerciseData1[i][0] + (props.exerciseData1[i][1] - 1)/2 , y: props.exerciseData1[i][3] * 5})
        }

        for (let i = 0; i < props.exerciseData1Performance2.length; i++) {
            exerciseData2.push({x: props.exerciseData1Performance2[i][0] + (props.exerciseData1Performance2[i][1] - 1)/2 , y: props.exerciseData1Performance2[i][2]})
            perfomance2Dynamics.push({x: props.exerciseData1Performance2[i][0] + (props.exerciseData1Performance2[i][1] - 1)/2 , y: props.exerciseData1Performance2[i][3] * 5})
        }
    }

    // process data for exercise 2
    if (exercise === 2 || exercise === 3 || exercise === 4) {
        for (let i = 0; i < props.originalData2.length; i++) {
            originalData.push({x: props.originalData2[i][0] + (props.originalData2[i][1] - 1)/4 , y: props.originalData2[i][2]})
            originalDynamics.push({x: props.originalData2[i][0] + (props.originalData2[i][1] - 1)/4 , y: props.originalData2[i][3] * 5})
        }
        for (let i = 0; i < props.exerciseData2.length; i++) {
            exerciseData1.push({x: props.exerciseData2[i][0] + (props.exerciseData2[i][1] - 1)/4 , y: props.exerciseData2[i][2]})
            perfomance1Dynamics.push({x: props.exerciseData2[i][0] + (props.exerciseData2[i][1] - 1)/4 , y: props.exerciseData2[i][3] * 5})
        }

        for (let i = 0; i < props.exerciseData2Performance2.length; i++) {
            exerciseData2.push({x: props.exerciseData2Performance2[i][0] + (props.exerciseData2Performance2[i][1] - 1)/4 , y: props.exerciseData2Performance2[i][2]})
            perfomance2Dynamics.push({x: props.exerciseData2Performance2[i][0] + (props.exerciseData2Performance2[i][1] - 1)/4 , y: props.exerciseData2Performance2[i][3] * 5})
        }

        if (exercise !== 2) {
            initialReveal1.x = exerciseData1[0].x
            initialReveal1.y = exerciseData1[0].y

            initialReveal2.x = exerciseData2[0].x
            initialReveal2.y = exerciseData2[0].y
        }
    }

    const possibleBPMs = [originalData[0].y - 80, originalData[0].y - 70, originalData[0].y - 60, originalData[0].y - 50, originalData[0].y - 40, originalData[0].y - 30, originalData[0].y - 20, originalData[0].y - 10, originalData[0].y, originalData[0].y + 10, originalData[0].y + 20, originalData[0].y + 30, originalData[0].y + 40, originalData[0].y + 50];

    return (
        <div>
            <div className='chart-container d-flex'>
                <XYPlot margin={{ left: 90 }} className="tempo-chart" height={600} width={90} yDomain={[possibleBPMs[0], possibleBPMs[possibleBPMs.length - 1]]}>
                    <YAxis tickTotal={possibleBPMs.length} tickValues={possibleBPMs} tickFormat={value => {
                        if (value === originalData[0].y) {
                            return <tspan style={{stroke: "#262261"}}>{`${value} bpm`}</tspan>
                        }  else if (value === 20) {
                            // TODO: change this
                            return <tspan style={{stroke: "#7F52E2"}}>{`${originalDynamics[0].y * 40}`}</tspan>
                        } else if (value === 10) {
                            // TODO: change this
                            return <tspan style={{stroke: "#7F52E2"}}>{`${originalDynamics[0].y * 40 - 25}`}</tspan>
                        } else if (value === 0) {
                            // TODO: change this
                            return <tspan style={{stroke: "#7F52E2"}}>{`${originalDynamics[0].y * 40 - 50}`}</tspan>
                        } else if (value === -10) {
                            // TODO: change this
                            return <tspan style={{stroke: "#7F52E2"}}>{`${originalDynamics[0].y * 40 - 75}`}</tspan>
                        } else if (value === -20) {
                            // TODO: change this
                            return <tspan style={{stroke: "#7F52E2"}}>{`${originalDynamics[0].y * 40 - 100}`}</tspan>
                        }
                        else if (value < originalData[0].y) {
                            return <tspan style={{stroke: "#F7931D"}}>{`${value} bpm`}</tspan>
                        } else if (value > originalData[0].y) {
                            return <tspan style={{stroke: "#ED2A7B"}}>{`${value} bpm`}</tspan>
                        }
                    }}/>
                    <LineSeries
                        data={[{x: 0, y: 0}]}
                    />
                    
                </XYPlot>
                <div className='chart-data-overflow'>
                <XYPlot margin={{ left: 10 }} className="tempo-chart" height={600} width={originalData.length * 20 * zoom} yDomain={[possibleBPMs[0], possibleBPMs[possibleBPMs.length - 1]]}>
                    <XAxis tickValues={originalData.map(value => value.x)} tickFormat={value => {
                        let [whole, decimal] = value.toString().split('.');
                        decimal = parseInt(decimal, 10);

                        if (exercise === 1) {
                            if (decimal) {
                                return `${decimal / 10 * 4}`;
                            } else {
                                return (
                                <tspan className='bar-num'>{whole}</tspan>
                                );
                            }
                        } else if (exercise === 2 || exercise === 3 || exercise === 4) {
                            if (decimal) {
                                return parseInt(`${decimal / 10 * 4}`[0]) + 1;
                            } else {
                                return (
                                <tspan className='bar-num'>{whole}</tspan>
                                );
                            }
                        }
                    }} />

                    <LineSeries
                        data={originalData}
                        color="#D6E6CECC"
                        style={{strokeWidth: 50}}
                    />

                    <LineSeries
                        data={originalData}
                        color="#B2D0A0"
                        style={{strokeWidth: 30}}
                    />

                    {selectedRecords.includes('record1') ? 
                        <LineSeries
                            data={exerciseData1}
                            color="red"
                            style={{ fillOpacity: 0, strokeWidth: 2, strokeOpacity: 0.5 }}
                        /> : null
                    }

                    {selectedRecords.includes('record2') ?
                        <LineSeries
                            data={exerciseData2}
                            color="blue"
                            style={{ fillOpacity: 0, strokeWidth: 2, strokeOpacity: 0.5 }}
                        /> : null
                    }

                    {(exercise === 3 || exercise === 4) && selectedRecords.includes('record1') ? 
                        <MarkSeries data={[initialReveal1]} size={8} /> : null
                    }

                    {(exercise === 3 || exercise === 4) && selectedRecords.includes('record2') ? 
                        <MarkSeries data={[initialReveal2]} size={8} /> : null
                    }

                    {exercise === 4 ? 
                        <LineSeries 
                            data={originalDynamics}
                            color="green"
                            style={{ fillOpacity: 0, strokeWidth: 3, strokeOpacity: 0.5 }}
                            strokeDasharray={[5, 2]}
                        /> : null    
                    }

                    {exercise === 4 && selectedRecords.includes('record1') ? 
                        <LineSeries 
                            data={perfomance1Dynamics}
                            color="red"
                            style={{ fillOpacity: 0, strokeWidth: 3, strokeOpacity: 0.5 }}
                            strokeDasharray={[5, 2]}
                        /> : null    
                    }

                    {exercise === 4 && selectedRecords.includes('record2') ? 
                        <LineSeries 
                            data={perfomance2Dynamics}
                            color="blue"
                            style={{ fillOpacity: 0, strokeWidth: 3, strokeOpacity: 0.5 }}
                            strokeDasharray={[5, 2]}
                        /> : null    
                    }
                </XYPlot>
                </div>
            </div>

            {exercise === 4 ? 
            <div className='chart-labels'>
                <div className='chart-label-container'>
                    <div className='chart-label-text'>Performance</div>
                    <div className='chart-label-performance'></div>
                </div>
                
                <div className='chart-label-container'>
                    <div className='chart-label-text'>Dynamics</div>
                    <div className='chart-label-dynamics'></div>
                </div>
            </div> : null
            }
        </div>
    )
}

export default TempoChart