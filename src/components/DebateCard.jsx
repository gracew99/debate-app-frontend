import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function DebateCard(props) {
    let history = useHistory();
    let {topicName} = useParams();

    async function getDetails() {
        // note: can't access props.key so made dup props.id
        const url = topicName+'/'+props.id+'/details';
        history.push(url);
    }

    return (
        <div class="debateCard" style={{backgroundColor:props.color}}>
            <h2>{props.person1 + " vs. " + props.person2}</h2>
            <h2>{props.title}</h2>
            <img src={props.imgurl} alt="debate"></img>
            <p> {props.date}</p>
            <Button variant="info" className="viewDetails" onClick={getDetails}>View details</Button>
        </div>
    )
}

export default DebateCard
