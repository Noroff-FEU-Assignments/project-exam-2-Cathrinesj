import React, { useEffect, useState} from "react";
import { API } from "../../constants/API";
import { Link, useParams } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Card from 'react-bootstrap/Card';
import { Col, Row, Stack } from "react-bootstrap";

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
                <Link to={`/post/${post.id}`} key={post.id}>
                    <Card className="opacity">
                        <Row>
                            <Col xs={12} md={4} >
                                <Card.Img src={post.media}/>
                            </Col>
                            <Col xs={6} md={8}>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.body}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Link>  
            ) )}
        </div>
    );
}

export default Posts;