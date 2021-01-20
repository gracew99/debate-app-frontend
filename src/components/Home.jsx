import React, { useEffect, useState } from "react";
import axios from '../axios';

function Home() {
    const [posts, setPosts] = useState([]);

    return (
        <div className="homePage">
            <h1> Welcome to the Bowl!</h1>
            <h2> Let the debates begin!</h2>
            <img className="homeImg" src="https://images.squarespace-cdn.com/content/v1/56a01a0542f552cfd29641ab/1534229138115-VGNPB3H7UXEJ1H9AD8GJ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=1000w" alt="fishbowl"></img> <br/><br/>
            <a href="topics">View Upcoming Debates</a> <br/><br/>
            <a href="newDebate">Register New Debate</a>
        </div>
    )
}

export default Home
