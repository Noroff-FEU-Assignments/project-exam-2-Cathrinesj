import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import FollowProfile from "../buttons/FollowProfile";
import UnfollowProfile from "../buttons/UnfollowProfile";
import ModalEditProfile from "../modals/ModalEditProfile";
import AuthContext from "../../context/AuthContext";


function Profile() {
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

    getData(`https://api.noroff.dev/api/v1/social/profiles/${id}?_followers=true`);
}, [id]);

console.log(data);

if (isLoading || !data ) {
    return <div>Loading</div>;
}

if (isError) {
    return <div>Error</div>;
}

if (id === loggedInUser) {

return (
    <Card style={{ width: '18rem' }} className="opacity">
        <Card.Img variant="top" src={data.banner}/>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Title>Followers:{data._count.followers}</Card.Title>
            <Card.Title>Following:{data._count.following}</Card.Title>
            <ModalEditProfile/>
        </Card.Body>
    </Card>
)
}

if (data.following === loggedInUser)

return (
    <Card style={{ width: '18rem' }} className="opacity">
        <Card.Img variant="top" src={data.banner}/>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Title>Followers:{data._count.followers}</Card.Title>
            <Card.Title>Following:{data._count.following}</Card.Title>
            <UnfollowProfile/>
        </Card.Body>
    </Card>
)

return (
    <Card style={{ width: '18rem' }} className="opacity">
        <Card.Img variant="top" src={data.banner}/>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Title>Followers:{data._count.followers}</Card.Title>
            <Card.Title>Following:{data._count.following}</Card.Title>
            <FollowProfile/>
        </Card.Body>
    </Card>
)
}

export default Profile;