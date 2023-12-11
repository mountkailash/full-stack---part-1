import { useState } from 'react'
import ReactDOM from 'react-dom/client'



const Button = (props) => {
    

    return(
        <>
        <button onClick={props.handleGood}>good</button>
        <button onClick={props.handleNeutral}>neutral</button>
        <button onClick={props.handleBad}>bad</button>
        </>
    )
}

export default Button