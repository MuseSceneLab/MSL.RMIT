import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import { useState } from 'react';


const TempoChart = (props) => {

    
    const originalData = []
    const exerciseData1 = []
    const exerciseData2 = []
    const exercise = parseInt(props.exercise)
    const selectedRecords = props.selectedRecords

    // for zoom in and zoom out
    const [zoom, setZoom] = useState(2);

    // for zoom in and zoom out
    const zoomIn = () => {
        if (zoom < 5) {
            setZoom(zoom + 1);
        }
    }

    // for zoom in and zoom out
    const zoomOut = () => {
        if (zoom > 1) {
            setZoom(zoom - 1);
        }
    }

    // process data for exercise 1
    if (exercise === 1) {
        for (let i = 0; i < props.originalData.length; i++) {
            originalData.push({x: props.originalData[i][0] + (props.originalData[i][1] - 1)/2 , y: props.originalData[i][2]})
        }

        for (let i = 0; i < props.exerciseData1.length; i++) {
            exerciseData1.push({x: props.exerciseData1[i][0] + (props.exerciseData1[i][1] - 1)/2 , y: props.exerciseData1[i][2]})
        }

        for (let i = 0; i < props.exerciseData1Performance2.length; i++) {
            exerciseData2.push({x: props.exerciseData1Performance2[i][0] + (props.exerciseData1Performance2[i][1] - 1)/2 , y: props.exerciseData1Performance2[i][2]})
        }
    }

    // process data for exercise 2
    if (exercise === 2) {
        for (let i = 0; i < props.originalData2.length; i++) {
            originalData.push({x: props.originalData2[i][0] + (props.originalData2[i][1] - 1)/4 , y: props.originalData2[i][2]})
        }
        for (let i = 0; i < props.exerciseData2.length; i++) {
            exerciseData1.push({x: props.exerciseData2[i][0] + (props.exerciseData2[i][1] - 1)/4 , y: props.exerciseData2[i][2]})
        }
    }

    const possibleBPMs = [originalData[0].y - 10, originalData[0].y - 5, originalData[0].y, originalData[0].y + 5, originalData[0].y + 10];

    return (
        <div>
            <div className='chart-container'>
                <XYPlot margin={{ left: 70 }} className="tempo-chart" height={200} width={originalData.length * 20 * zoom} yDomain={[possibleBPMs[0], possibleBPMs[possibleBPMs.length - 1]]}>
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
                        } else if (exercise === 2) {
                            if (decimal) {
                                return parseInt(`${decimal / 10 * 4}`[0]) + 1;
                            } else {
                                return (
                                <tspan className='bar-num'>{whole}</tspan>
                                );
                            }
                        }
                    }} />
                    <YAxis tickTotal={possibleBPMs.length} tickValues={possibleBPMs} tickFormat={value => {
                        if (value == originalData[0].y) {
                            return <tspan style={{stroke: "#262261"}}>{`${value} bpm`}</tspan>
                        } else if (value == originalData[0].y - 5 || value == originalData[0].y - 10) {
                            return <tspan style={{stroke: "#F7931D"}}>{`${value} bpm`}</tspan>
                        } else if (value == originalData[0].y + 5 || value == originalData[0].y + 10) {
                            return <tspan style={{stroke: "#ED2A7B"}}>{`${value} bpm`}</tspan>
                        }
                    }}/>
                    <LineSeries
                        data={originalData}
                        color="#D6E6CECC"
                        style={{strokeWidth: 60}}
                    />
                    <LineSeries
                        data={originalData}
                        color="#B2D0A0"
                        style={{strokeWidth: 40}}
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

                    
                </XYPlot>
            </div>
        </div>
    )
}

export default TempoChart