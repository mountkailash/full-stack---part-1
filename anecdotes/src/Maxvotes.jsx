import React from "react";



const Maxvotes = (props) => {


    return(
        <>
        <h1>{props.mostVote}</h1>
        <p>{props.anecdoteMostVote}</p>
        <p>has {props.mostVoteCount} vote</p>
        </>
    )
}

export default Maxvotes