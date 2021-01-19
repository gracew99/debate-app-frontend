import React, { useEffect, useState } from "react";
import axios from '../axios';

function Home() {
    const [posts, setPosts] = useState([]);

    return (
        <div>
            <h1> Welcome to the Bowl!</h1>
            <h2> Let the debates begin!</h2>
            <a href="topics">View Upcoming Debates</a>
        </div>
    )
}

export default Home
