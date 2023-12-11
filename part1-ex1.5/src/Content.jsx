import React from "react";
import ReactDOM  from "react-dom/client";
import Part from "./Part";




const Content = (props) => {
    
    const {parts} = props;

    return (
        <>
        <div>
            <Part course = {parts[0].name} exercises = {parts[0].exercises} />
            <Part course = {parts[1].name} exercises = {parts[1].exercises} />
            <Part course = {parts[2].name} exercises = {parts[2].exercises} />
        </div>
        </>
    )
}

export default Content