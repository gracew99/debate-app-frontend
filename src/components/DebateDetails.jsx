import React from 'react'

function DebateDetails(props) {
    return (
        <div className={"debateDetail"} style={{backgroundColor:props.color}}>
            <h2>{props.person1 + " vs. " + props.person2}</h2>
            <img src={props.person1img} class="profilepic" alt="person1"></img>
            <img src={props.person2img} class="profilepic" alt="person2"></img>
            <h2>{props.topic}</h2>
            <p>{props.date}</p>
            <h2 className={"meet"}>{"Meet " + props.person1.split(" ")[0]}</h2>
            <p className={"bio"}>{props.person1description}</p>
            <h2 className={"meet"}>{"Meet " + props.person2.split(" ")[0]}</h2>
            <p className={"bio"}>{props.person2description}</p>
            <a href="register"> Register </a>
        </div>
    )
}

export default DebateDetails
