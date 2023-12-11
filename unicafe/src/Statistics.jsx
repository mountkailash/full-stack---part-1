import React from "react";
import ReactDOM from "react-dom/client";
import StatisticsLine from "./statisticsLine";



const Statistics = (props) => {

    const total = props.good + props.neutral + props.bad
    
    if(total === 0) {
        return(
            <p>No feedback given</p>
        )
    }

    return(
        <>
        <h1>{props.stats}</h1>
        <table>
            <tbody>
                <tr>
                    <td>
                    <StatisticsLine text='good' value={props.good}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <StatisticsLine text='neutral' value={props.neutral}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <StatisticsLine text='bad' value={props.bad}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <StatisticsLine text='all' value={total} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <p>average {(props.good - props.bad) / total}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <p>positive {(props.good / total) * 100 }% </p>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Statistics