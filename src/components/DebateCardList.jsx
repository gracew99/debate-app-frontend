import React from 'react'
import DebateCard from './DebateCard'
function DebateCardList(props) {
    return (
        <div>
            {props.debates.map((debate) => 
                <DebateCard 
                person1={debate.person1}
                person2={debate.person2}
                topic={debate.topic}
                imgurl={debate.imageUrl}
                date={debate.date}
                color={debate.color} 
                /> 
            )}
        </div>
    )
}

export default DebateCardList
