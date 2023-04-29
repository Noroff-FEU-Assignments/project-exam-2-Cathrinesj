import React, { useEffect, useState} from "react";
import { API } from "../../constants/API";
import { Link, useParams } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Card from 'react-bootstrap/Card';
import { Col, Row, Stack } from "react-bootstrap";
import ThumbsUp from '../../icons/ThumbsUp.svg'
import Comments from '../../icons/Comments.svg'
import Comment from '../../icons/Comment.svg'

const url = API + 'posts?_author=true'

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
                                    <Card.Img className="avatarImage"  src={post.author.avatar}></Card.Img>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.body}</Card.Text>
                                </Card.Body>
                            </Col>
                            <Col xs={12}>
                                <img src={ThumbsUp} className="icons"/>
                                <Card.Title>{post._count.reactions} </Card.Title>
                                <img src={Comments} className="icons"/>
                                <Card.Title>{post._count.comments} </Card.Title>
                                <img src={Comment} className="icons"/>
                                <Card.Title>Comment </Card.Title>
                            </Col>
                        </Row>
                    </Card>
                </Link>  
            ) )}
        </div>
    );
}

export default Posts;