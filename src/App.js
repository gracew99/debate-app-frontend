import './App.css';
import DebateCardList from './components/DebateCardList';
import DebateTopicList from './components/DebateTopicList';
import DebateDetails from './components/DebateDetails';
import axios from './axios';
import React, { useEffect, useState } from "react";

let debate1 = {
  person1: "Jim Connors",
  person2: "Stacey McCann",
  topic: "Economic Policy",
  imageUrl: "https://th.bing.com/th/id/OIP.wDPes30CTv6un0dbQ35vRwHaHa?pid=Api&rs=1",
  date: "1/17/2021",
  color: "aliceblue",
  person1img: "https://blakerobinsonphotography.files.wordpress.com/2010/11/capture0063.jpg",
  person2img: "https://images.squarespace-cdn.com/content/v1/50c95646e4b015d1d5e94d59/1574518630013-LVL1R0KDWHG11MTHX2S2/ke17ZwdGBToddI8pDm48kFcjIIX1FKcdO91v_2sr_2x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USW_WVzW7aVXo2Ry4s1rbuMMhsaMdDaYTr6tab37c5BbKULy2O2411SvyKR8oCtcyw/IMA+Select++-+%7C+Anthem+Photography+%7C+wwww.anthem-photo.com+%7C+001.jpg",
  person1description: "quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus",
  person2description: "cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu"
}
let debate2 = {
  person1: "Hanson Wagner",
  person2: "Natalie Hanson",
  topic: "COVID Reopening Policy",
  imageUrl: "https://samaritanhealth.com/wp-content/uploads/2020/03/Coronavirus-1-1024x1024.jpg",
  date: "1/17/2021",
  color: "antiquewhite",
  person1img:"https://th.bing.com/th/id/OIP.j_HoYgo3pnM7BI-1eqnQLAHaJS?pid=Api&rs=1",
  person2img: "https://th.bing.com/th/id/OIP.xSI1LuR4vV15f8ryeZjXMQHaLH?pid=Api&rs=1",
  person1description: "pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse",
  person2description: "magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed",
  
}

let debate3 = {
  person1: "Bruce Deleon",
  person2: "Glenn Moon",
  topic: "STEM Education",
  imageUrl: "https://th.bing.com/th/id/OIP.BIVf0UNM4A8uG6FqCSyYkAHaFu?pid=Api&rs=1",
  date: "1/17/2021",
  color:"beige", 
  person1img:"https://th.bing.com/th/id/OIP.-PDJSUVJACoCMS26RFTFbAHaJ4?w=182&h=243&c=7&o=5&pid=1.7",
  person2img: "https://www.eikonphoto.com/wp-content/uploads/2017/03/male-headshot-tie-color-e1515795186596.jpg",
  person1description: "pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
  person2description: "eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet",
  
}
let debates = [debate1, debate2, debate3]
let topics = ["Healthcare", "Ethics of AI", "Moral Philosophy"]
let colors = ["AliceBlue", 'CornSilk', 'HoneyDew']
let detailcolors = ["PapayaWhip", 'MistyRose', 'Thistle']

function App() {
  let i = 0;
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
      async function fetch() {
        const response = await axios.get('/v2/posts');
        setPosts(response.data);
        return response;
      }
      console.log("calling fetch")

      fetch();
    }, []);


  return (
    <div className="App">
      <h1>Upcoming Debates</h1>
      <DebateTopicList topics={topics} colors={colors}/>
      <DebateCardList debates={posts}/>
      {posts.map((debate) => 
      <DebateDetails 
        color={detailcolors[i++]}
        person1={debate.person1}
        person2={debate.person2}
        topic={debate.topic}
        person1img={debate.person1img}
        person2img={debate.person2img}
        person1description={debate.person1description}
        person2description={debate.person2description}
        date={debate.date}/>
      )}
    </div>
  );
}

export default App;
