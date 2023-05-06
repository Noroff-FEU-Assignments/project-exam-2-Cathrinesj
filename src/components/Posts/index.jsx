import React from "react";
import useApi from "../../hooks/fetchApi";
import { API } from "../../constants/API";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Col, Row, Stack } from "react-bootstrap";
import ThumbsUp from '../../icons/ThumbsUp.svg'
import Comments from '../../icons/Comments.svg'
import Comment from '../../icons/Comment.svg'
import LoadingSpinner from "../common/Spinner";
import GeneralError from "../common/GeneralError";

function Posts() {
    const { data, isLoading, isError } = useApi(
        API + 'posts?_author=true'
    );

    if(isLoading) {
        return <LoadingSpinner/>;
    }

    if (isError) {
        return <GeneralError/>;
    }

    return (
        <div>
            {data.map((post) => (
                <Link to={`/post/${post.id}`} key={post.id}>
                    <Card className="opacity mb-2">
                        <Row>
                            <Col xs={12} md={4} >
                                <Card.Img src={post.media}/>
                            </Col>
                            <Col xs={12} md={8}>
                                <Card.Body>
                                    <Stack direction="horizontal" gap={2}>
                                        <Card.Img className="avatarImageSmall"  src={post.author.avatar}></Card.Img>
                                        <Card.Title><h2>{post.title}</h2></Card.Title>
                                    </Stack>
                                    <Card.Text>{post.body}</Card.Text>
                                    <Stack direction="horizontal" gap={3}>
                                        <Card.Title><img src={ThumbsUp} alt="Icon for reactions" className="icons"/>{post._count.reactions} </Card.Title>
                                        <Card.Title><img src={Comments} alt="Icon for comments" className="icons"/>{post._count.comments} </Card.Title>
                                        <Card.Title><img src={Comment} alt="Icon for commenting" className="icons"/>Comment</Card.Title>
                                    </Stack>
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