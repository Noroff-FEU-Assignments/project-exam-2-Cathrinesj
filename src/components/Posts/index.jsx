import React, { useEffect, useState} from "react";
import { API } from "../../constants/API";
import { Link, useParams } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Card from 'react-bootstrap/Card';

const url = API + 'posts'

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
        <div>
            {posts.map((post) => (
                <Link to="/post/54" key={post.id}>
                    <Card style={{ width: '18rem' }} className="opacity">
                        <Card.Img variant="top" src="{post.media_embed}"/>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>  
            ) )}
        </div>
    );
}

export default Posts;