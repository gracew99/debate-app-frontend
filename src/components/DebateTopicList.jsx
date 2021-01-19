import React from 'react'
import DebateTopic from './DebateTopic'

function DebateTopicList(props) {
    let i = 0;

    return (
        <div>
            {props.topics.map((topic) => {
                    return <DebateTopic topic={topic} color={props.colors[i++]} /> 
                }
            )}
        </div>
    )
}

export default DebateTopicList
