import React, { useState } from 'react'
import axios from '../axios'

function DebateCreation() {

    const [name1, setName1]= useState("");
    const [name2, setName2]= useState("");
    const [title, setTitle]= useState("");
    const [topics, setTopics]= useState([])
    const [imgUrl, setImgUrl]= useState("");
    const [date, setDate]= useState("");
    const [image1, setImage1]= useState("");
    const [image2, setImage2]= useState("");
    const [descrip1, setDescrip1]= useState("");
    const [descrip2, setDescrip2]= useState("");

    async function handleSubmit() {
        const params = {
            person1: name1,
            person2: name2,  
            title: title, 
            topics: topics,
            imageUrl: imgUrl, 
            date: date,
            attendees: 0, 
            person1img: image1, 
            person2img: image2,  
            person1description: descrip1,  
            person2description: descrip2, 
        }
        const response = await axios.post('/v2/posts', params);
        console.log(response.data);
        setTopics(response.data);
        return response;
    }

    return (
        <div className="registerDebate">
            <h1 className="pageTitle"> Register a New Debate!</h1> <br/>
            <form onSubmit={handleSubmit}>
                <label>
                Debater 1 Name: 
                <input type="text" value={name1}  onChange={(e) => setName1(e.target.value)} />    </label>
                <br/>
                <label>
                Debater 2 Name:
                <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} />     </label>
                <br/>
                <label>
                Debate Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />       </label>
                <br/>
                <label>
                Debate Topics:
                <input type="text" value={topics} onChange={(e) => setTopics(e.target.value)} />       </label>
                <br/>
                <label>
                Link to Cover Image:
                <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />       </label>
                <br/>
                <label>
                Date:
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />          </label>
                <br/>
                <label>
                Link to Debater 1 Photo:
                <input type="text" value={image1} onChange={(e) => setImage1(e.target.value)} />          </label>
                <br/>
                <label>
                Link to Debater 2 Photo:
                <input type="text" value={image2} onChange={(e) => setImage2(e.target.value)} />      </label>
                <br/>
                <label>
                Debater 1 Description:
                <textarea value={descrip1} onChange={(e) => setDescrip1(e.target.value)} />     </label>
                <br/>
                <label>
                Debater 2 Description:
                <textarea value={descrip2} onChange={(e) => setDescrip2(e.target.value)} />         </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default DebateCreation
