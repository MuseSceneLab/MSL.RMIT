import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';


const TempoChart = (props) => {

    
    const originalData = []
    const rehearsalData = []
    const exercise = parseInt(props.exercise)

    // process data for exercise 1
    if (exercise === 1) {
        for (let i = 0; i < props.originalData.length; i++) {
            originalData.push({x: props.originalData[i][0] + (props.originalData[i][1] - 1)/2 , y: props.originalData[i][2]})
        }
        for (let i = 0; i < props.rehearsalData.length; i++) {
            rehearsalData.push({x: props.rehearsalData[i][0] + (props.rehearsalData[i][1] - 1)/2 , y: props.rehearsalData[i][2]})
        }
    }

    // process data for exercise 2
    if (exercise === 2) {
        for (let i = 0; i < props.originalData.length; i++) {
            originalData.push({x: props.originalData[i][0] + (props.originalData[i][1] - 1)/4 , y: props.originalData[i][2]})
        }
        for (let i = 0; i < props.rehearsalData.length; i++) {
            rehearsalData.push({x: props.rehearsalData[i][0] + (props.rehearsalData[i][1] - 1)/4 , y: props.rehearsalData[i][2]})
        }
    }

    const possibleBPMs = [originalData[0].y - 10, originalData[0].y - 5, originalData[0].y, originalData[0].y + 5, originalData[0].y + 10];

    return (
        <div>
            <XYPlot margin={{ left: 70 }} className="tempo-chart" height={200} width={originalData.length * 40} yDomain={[possibleBPMs[0], possibleBPMs[possibleBPMs.length - 1]]}>
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
                <LineSeries
                    data={rehearsalData}
                    color="red"
                    style={{ fillOpacity: 0, strokeWidth: 2 }}
                />
            </XYPlot>
        </div>
    )
}

export default TempoChart