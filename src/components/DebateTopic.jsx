import React from 'react'

function DebateTopic(props) {

    return (
        <div class="debatetopic" style={{backgroundColor:props.color}}>
            <h2>{props.topic}</h2>
        </div>
    )
}

export default DebateTopic
