import React from "react";
import useApi from "../../hooks/fetchApi";
import { API } from "../../constants/API";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button, Row, Col } from "react-bootstrap";
import LoadingSpinner from "../common/Spinner";
import GeneralError from "../common/GeneralError";

function Profiles() {
    const { data, isLoading, isError } = useApi(
        API + 'profiles?_count'
    );

    if(isLoading) {
        return <LoadingSpinner/>;
    }

    if (isError) {
        return <GeneralError/>;
    }

    console.log(data);

    return (
        <div>
            {data.map((profile) => (
                <Card  key={profile.name} className="opacity">
                    <Card.Body>
                        <Row>
                            <Col xs={5} md={4}>
                                <Card.Img className="avatarImage avatarImageLarge" src={profile.avatar}/>  
                            </Col> 
                            <Col xs={7} md={4}>
                                    <Card.Title><p>{profile.name}</p></Card.Title>
                                    <Card.Text>Followers:{profile._count.followers}</Card.Text>
                                    <Card.Text>Following:{profile._count.following}</Card.Text>
                                    <Card.Text>Posts:{profile._count.posts}</Card.Text>
                            </Col>
                            <Col xs={12} md={4}>
                                <Link to={`/profile/${profile.name}`}>
                                    <Button>View</Button>
                                </Link>   
                            </Col>          
                        </Row>  
                    </Card.Body>
                </Card> 
            ) )}
        </div>
    );
}

export default Profiles;
