import React, { useEffect, useState } from 'react'
import DebateCard from './DebateCard'
import { useParams } from "react-router-dom";
import axios from '../axios';

function DebateCardList() {
    let { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getDebates() {
            const response = await axios.get('/v2/debates/'+id);
            setPosts(response.data);
            return response;
        }
        getDebates();
    }, [])
    

    return (
        <div>
            <h2> Upcoming debates on: {id}</h2>

            <h3> View details for more information and to register.</h3>

            {posts.map((debate) => 
                <DebateCard 
                person1={debate.person1}
                person2={debate.person2}
                title={debate.title}
                imgurl={debate.imageUrl}
                date={debate.date}
                color={debate.color} 
                /> 
            )}
        </div>
    )
}

export default DebateCardList
