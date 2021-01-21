import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from '../axios'
import Badge from 'react-bootstrap/Badge'

const isToday = (someDateString) => {
    const someDate = new Date(Date.parse(someDateString));
    const today = new Date()
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
}

function DebateDetails(props) {
    // WARNING: must assign to exact param name from Route path 
    let { topicid, id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getDebates() {
            // TODO: replace topicid with uuid
            const url = '/v2/debates/'+id;
            console.log(url);
            const response = await axios.get(url);
            setPosts(response.data);
            return response;
        }
        getDebates();
    }, [])
    
    return (
        <div className={'debateDetailContainer'}>
        {posts.map(post => 
            <div className={"debateDetail"} style={{backgroundColor:props.colors[0]}}>
                {isToday(post.date) &&   
                <Badge className="badge" variant="success"> Happening Today! </Badge>}
                <h1>{"Title: " + post.title}</h1>
                <h1>{post.person1 + " vs. " + post.person2} <br/></h1>
                <h4> {(new Date(Date.parse(post.date))).toLocaleDateString()} <br/><br/><br/></h4>
                <img src={post.person1img} class="profilepic" alt="person1"></img>
                <img src={post.person2img} class="profilepic" alt="person2"></img><br/><br/><br/>
                <h4>Topics: {post.topics.map(topic => topic)}</h4><br/>
                <h1 className={"meet"}>{"Meet " + post.person1.split(" ")[0]}</h1>
                <h4 className={"bio"}>{post.person1description}</h4> <br/>
                <h1 className={"meet"}>{"Meet " + post.person2.split(" ")[0]}</h1>
                <h4 className={"bio"}>{post.person2description}</h4>
                <a href="signup" className="signUp"> Sign Up </a>
            </div>
        )}
        </div>
        
    )
}

export default DebateDetails
