import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function DebateCard(props) {
    let history = useHistory();
    let {id} = useParams();

    async function getDetails() {
        history.push(id+'/'+props.title+'/details');
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
