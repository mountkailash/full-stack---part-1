import { useState } from "react";
import { ReactDOM } from "react-dom/client";


const StatisticsLine = (props) => {


    return(
        <>
        <p>{props.text} {props.value}</p>
        </>
    )
}

export default StatisticsLine