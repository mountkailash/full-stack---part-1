import React from "react";



const Button = ({handleClick, handleVote, vote, selected}) => {



    return(
        <>
        <p>has {vote[selected]} vote</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
        </>
    )
}

export default Button