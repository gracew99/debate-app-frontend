import React from 'react'

const currentUrl = window.location.href;
function DebateCard(props) {

    return (
        <div class="debatecard" style={{backgroundColor:props.color}}>
            <h2>{props.person1 + " vs. " + props.person2}</h2>
            <h2>{props.topic}</h2>
            <img src={props.imgurl} alt="debate"></img>
            <p> {props.date.toDateString()}</p>
            <a href={currentUrl+"hey"}>View details</a>
        </div>
    )
}

export default DebateCard
