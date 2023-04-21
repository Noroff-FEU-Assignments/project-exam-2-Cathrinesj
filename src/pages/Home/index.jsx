import React, { useEffect, useState} from "react";
import { API } from "../../constants/API";
import { Link, useParams } from "react-router-dom";
import Navigation from "./../../components/Navigation"; 
import useLocalStorage from "../../hooks/useLocalStorage";

const url = API + 'posts'

function PostId() {

    const params = useParams();
    return <div>Individual Post ID: {params.id} </div>
}

function Posts() {
    const [posts, setPosts] = useState([]);

    const options = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQxMiwibmFtZSI6IkNhdGhyaW5lU0oiLCJlbWFpbCI6IkNhdEp1djQ2MzE1QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY4MTQxMDYxMn0.byp-C0Ha4rqxGlJm-c_WFZucnWQ8hpM4GDfti1Pg2G0",
        },
    }

    useEffect(() => {
        async function getData() {
            const response = await fetch(url, options);
            const json = await response.json();

            console.log(json);
            
            setPosts(json);
        }
        getData();
    }, []);

    return (
        <>
        <Navigation />
        <div>
            {posts.map((post) => (
                <Link to="/post/5">
                    <div key={post.id}>
                        <div>{post.media}</div>
                        <div>{post.author_avatar}</div>
                        <h2>{post.title}</h2>
                        <p>{post.body} </p>
                        <p>{post.tags}</p> 
                    </div>
                </Link>  
            ) )}
        </div>
        </>
    );
}

export default Posts;