import React from "react";
import useApi from "../../hooks/fetchApi";
import { API } from "../../constants/API";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button, Row, Col } from "react-bootstrap";

function Profiles() {
    const { data, isLoading, isError } = useApi(
        API + 'profiles?_count'
    );

    if(isLoading) {
        return <div>Loading</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    console.log(data);

    return (
        <div>
            {data.map((profile) => (
                <Card  key={profile.name} className="opacity">
                    <Card.Body>
                        <Row>
                            <Col xs={4} md={2}>
                                <Card.Img className="avatarImage" src={profile.avatar}/>  
                            </Col> 
                            <Col xs={8} md={6}>
                                
                                    <Card.Title>{profile.name}</Card.Title>
                                    <Card.Text>Followers:{profile._count.followers}</Card.Text>
                                    <Card.Text>Following:{profile._count.following}</Card.Text>
                                    <Card.Text>Posts:{profile._count.posts}</Card.Text>
                            </Col>
                            <Col xs={6} md={4}>
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
