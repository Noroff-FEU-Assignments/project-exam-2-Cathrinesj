import React from "react";
import useApi from "../../hooks/fetchApi";
import { API } from "../../constants/API";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import ThumbsUp from '../../icons/ThumbsUp.svg'
import Comments from '../../icons/Comments.svg'
import Comment from '../../icons/Comment.svg'

function Posts() {
    const { data, isLoading, isError } = useApi(
        API + 'posts?_author=true'
    );

    if(isLoading) {
        return <div>Loading</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <div>
            {data.map((post) => (
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