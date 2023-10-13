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