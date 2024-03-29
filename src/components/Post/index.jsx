import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ModalEditPost from "../modals/ModalEditPost";
import LikeIcon from "../icons/LikeIcon";
import { Col, Row, Stack } from "react-bootstrap";
import Comments from '../../icons/Comments.svg'
import LoadingSpinner from "../common/Spinner";
import GeneralError from "../common/GeneralError";

function Post() {
    const [auth] = useContext(AuthContext);
    const accessToken = auth.accessToken;
    const loggedInUser = auth.name;
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();
  

    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
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

    getData(`https://api.noroff.dev/api/v1/social/posts/${id}?_author=true&_comments=true`);
}, [id]);

if (isLoading || !data ) {
    return <LoadingSpinner/>;
}

if (isError) {
    return <GeneralError/>;
}

let author  = data.author.name;

if (author === loggedInUser) {

return (
    <>
    <Card className="opacity mb-2">
        <Row>
            <Card.Body>
                <Card.Title><h1>{data.title}</h1></Card.Title>
                <Stack direction="horizontal" gap={2}>
                    <Card.Img className="avatarImageSmall" src={data.author.avatar} alt="avatar image for the user"/>
                    <Card.Text>By: {data.author.name}</Card.Text>  
                </Stack>
            </Card.Body>
        </Row>
    </Card>
    <Card className="opacity mb-2">
        <Row>
            <Card.Body>
                <Col xs={12} md={4} >
                    <ModalEditPost/>
                </Col>
            </Card.Body>
        </Row>
    </Card>
   <Card className="opacity mb-2">    
        <Row>
        <Card.Body>
            <Col xs={12} md={8}>
                <Card.Img variant="top" src={data.media} alt="image relating to the post"/>
                <Card.Text>{data.body}</Card.Text>
                <Stack direction="horizontal" gap={3}>
                    <Card.Title><LikeIcon/>{data._count.reactions}</Card.Title>
                    <Card.Title><img src={Comments} alt="Icon for comments" className="icons"/>{data._count.comments} </Card.Title>
                </Stack>
            </Col>
        </Card.Body>
        </Row>
    </Card>
    </>
)
}
   return (
    <>
    <Card className="opacity mb-2">
        <Row>
            <Card.Body>
                <Card.Title><h1>{data.title}</h1></Card.Title>
                <Stack direction="horizontal" gap={2}>
                    <Card.Img className="avatarImageSmall" src={data.author.avatar} alt="avatar image for the user"/>
                    <Card.Text>By: {data.author.name}</Card.Text>  
                </Stack>
            </Card.Body>
        </Row>
    </Card>
    <Card className="opacity mb-2">    
        <Row>
        <Card.Body>
            <Col xs={12} md={8}>
                <Card.Img variant="top" src={data.media} alt="image relating to the post"/>
                <Card.Text>{data.body}</Card.Text>
                <Stack direction="horizontal" gap={3}>
                    <Card.Title><LikeIcon/>{data._count.reactions}</Card.Title>
                    <Card.Title><img src={Comments} alt="Icon for comment" className="icons"/>{data._count.comments} </Card.Title>
                </Stack>
            </Col>
        </Card.Body>
        </Row>
    </Card>
    </>
)
}

export default Post;