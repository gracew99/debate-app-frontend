import React, { useState, useEffect } from 'react'
import DebateTopic from './DebateTopic'
import axios from '../axios'

function DebateTopicList(props) {
    let i = 0;
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        async function getDebates() {
            const response = await axios.get('/v2/topics');
            console.log(response.data);
            setTopics(response.data);
            return response;
        }
        getDebates();
    }, [])
    

    return (
        <div>
            <h2> Here are the upcoming debate topics. Select a tile to view specific debates.</h2>
            {topics.map((topic) => {
                    return <DebateTopic topic={topic} color={props.colors[i++]} /> 
                }
            )}
        </div>
    )
}

export default DebateTopicList
