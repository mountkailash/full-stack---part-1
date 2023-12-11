import React from "react";
import ReactDOM from "react-dom/client";


const Total = (props) => {
    const {parts} = props;
    const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises;

    return (
        <>
        <div>
            <p>Number of exercise {totalExercises}</p>
        </div>
        </>
    )
}

export default Total