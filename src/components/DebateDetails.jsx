import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from '../axios'

function DebateDetails() {

    // WARNING: must assign to exact param name from Route path 
    let { topicid, title } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getDebates() {
            const url = '/v2/posts/'+topicid+"/"+title;
            console.log("getting posts " + url);

            const response = await axios.get(url);
            setPosts(response.data);
            return response;
        }
        getDebates();
    }, [])
    

    return (
        <div>
        {posts.map(post => 
            <div className={"debateDetail"} style={{backgroundColor:post.color}}>
                <h2>{"Title: " + post.title}</h2>

                <h2>{post.person1 + " vs. " + post.person2}</h2>
                <img src={post.person1img} class="profilepic" alt="person1"></img>
                <img src={post.person2img} class="profilepic" alt="person2"></img>
                <h2>{post.topic}</h2>
                <p>{post.date}</p>
                <h2 className={"meet"}>{"Meet " + post.person1.split(" ")[0]}</h2>
                <p className={"bio"}>{post.person1description}</p>
                <h2 className={"meet"}>{"Meet " + post.person2.split(" ")[0]}</h2>
                <p className={"bio"}>{post.person2description}</p>
                <a href="register"> Register </a>
            </div>
        )}
        </div>
        
    )
}

export default DebateDetails
