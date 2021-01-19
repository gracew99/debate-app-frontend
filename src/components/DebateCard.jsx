import React from 'react'
import { useHistory, useParams } from "react-router-dom";

function DebateCard(props) {
    let history = useHistory();
    let {id} = useParams();

    async function getDetails() {
        history.push(id+'/details');
    }


    return (
        <div class="debatecard" style={{backgroundColor:props.color}}>
            <h2>{props.person1 + " vs. " + props.person2}</h2>
            <h2>{props.topic}</h2>
            <img src={props.imgurl} alt="debate"></img>
            <p> {props.date}</p>
            <div onClick={getDetails}>View details</div>
        </div>
    )
}

export default DebateCard
