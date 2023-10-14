/**
 * A React component that displays a radial chart representing the number of times a task has been completed and failed.
 * @param {Object} props - The props object containing the number of times the task has been completed and failed.
 * @param {number} props.completed - The number of times the task has been completed.
 * @param {number} props.failed - The number of times the task has failed.
 * @returns {JSX.Element} A React component that displays a radial chart and the completion rate of the task.
 */
import React from 'react';
import { RadialChart } from 'react-vis';

const TimesCompletedChart = (props) => {

    // angle and colour range are in opposite order
    const myData = [{angle: props.completed}, {angle: props.failed}]
    const colourRange = ['white','#7F52E2']


    return (
    <>
        <RadialChart
            data={myData}
            width={200}
            height={200}
            colorRange={colourRange}
        />

        <div className='times-completed-rate'>{props.completed} / {props.completed + props.failed}</div>
    </>
    )
}

export default TimesCompletedChart;