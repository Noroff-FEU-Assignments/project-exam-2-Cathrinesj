import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ModalEditPost from "../modals/ModalEditPost";
import LikeIcon from "../icons/LikeIcon";




function Post() {
    const [auth] = useContext(AuthContext);
    const accessToken = auth.accessToken;
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
            <Card.Title>{data.title}</Card.Title>
            <ModalEditPost/>
            <Card.Img className="avatarImage" src={data.author.avatar}/>
            <Card.Text>By: {data.author.name}</Card.Text>
            <Card.Img variant="top" src={data.media}/>
            <Card.Text>{data.body}</Card.Text>
            <LikeIcon/>
        </Card.Body>
    </Card>
    </>
)
}

export default Post;