import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { API } from "../../constants/API";
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";


function Post() {

    let { id } = useParams();
    const { data, isLoading, isError} = useApi(
        API + `posts/${id}?_author=true`,
        );

    if (isLoading || !data ) {
        return <div>Loading</div>;
    } 

    if (isError) {
        return <div>Error</div>;
    }

    console.log(data);

    return (
    <>
        <Card className="opacity">    
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <Card.Title><h1>{data.title}</h1></Card.Title>
                        <Card.Img className="avatarImage" src={data.author.avatar}/>
                        <Card.Text>By: {data.author.name}</Card.Text>
                    </Col>
                    <Col xs={12}>
                        <Card.Img src={data.media}/>
                    </Col>    
                    <Col xs={12}>
                        <Card.Text>{data.body}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>
    )
}

export default Post;


                           
                            