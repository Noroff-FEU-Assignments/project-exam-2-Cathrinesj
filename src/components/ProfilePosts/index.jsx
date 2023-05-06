import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../constants/API";
import { Link } from "react-router-dom";
import { Card, Col, Row, Stack } from "react-bootstrap";
import LoadingSpinner from "../common/Spinner";
import GeneralError from "../common/GeneralError";
import Comments from '../../icons/ThumbsUp.svg';
import ThumpsUp from '../../icons/Comments.svg';
import Comment from '../../icons/Comment.svg';

function ProfilePosts() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();

    const options = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQxMiwibmFtZSI6IkNhdGhyaW5lU0oiLCJlbWFpbCI6IkNhdEp1djQ2MzE1QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY4MTQxMDYxMn0.byp-C0Ha4rqxGlJm-c_WFZucnWQ8hpM4GDfti1Pg2G0",
        },
    }


useEffect(() => {
    async function getData(url) {
        try {
            setIsLoading(true);
            setIsError(false);

            const response = await fetch(url, options);
            const json = await response.json();

            setData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    getData(API + `profiles/${id}/posts`);
}, [id]);

if (isLoading || !data ) {
    return <LoadingSpinner/>;
}

if (isError) {
    return <GeneralError/>;
}

console.log(data);

return (
    <div>
        {data.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
            <Card className="opacity mb-2">
                <Row>
                    <Col xs={12}>
                        <Card.Img variant="top" src={post.media} alt="image about the post"/>
                        <Card.Body>
                            <Card.Title><h2>{post.title}</h2></Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                            <Stack direction="horizontal" gap={3}>
                                <Card.Title><img src={ThumpsUp} alt="Icons for reactions" className="icons"></img>{post._count.comments} </Card.Title>
                                <Card.Title><img src={Comments} alt="Icons for comments" className="icons"></img>{post._count.comments} </Card.Title>
                                <Card.Title><img src={Comment} alt="Icons for comment" className="icons"></img>{post._count.comments} </Card.Title>
                            </Stack>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Link>
        ) )}
        </div>
        )
    }

export default ProfilePosts;