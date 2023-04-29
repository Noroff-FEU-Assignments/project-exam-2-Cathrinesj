import React, { useEffect, useState} from "react";
import { API } from "../../constants/API";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button, Row, Col } from "react-bootstrap";

const url = API + 'profiles?_count'

function Profiles() {
    const [profiles, setPosts] = useState([]);

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
            {profiles.map((profile) => (
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
                                    <Button variant="primary">View</Button>
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
