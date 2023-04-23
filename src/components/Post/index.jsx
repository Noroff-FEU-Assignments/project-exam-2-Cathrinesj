import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Post() {
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

    getData(`https://api.noroff.dev/api/v1/social/posts/${id}?reactions&&?comments`);
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
    <Card style={{ width: '18rem' }} className="opacity">
        <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Img variant="top" src="{data.author_avatar}"/>
            <Card.Img variant="top" src="{data.media_embed}"/>
            <Card.Text>{data.body}</Card.Text>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="opacity">
    <Card.Body>
        <Card.Title>{data._count.reactions} </Card.Title>
        <Card.Title>{data._count.comments} </Card.Title>
        <Card.Title>Comment </Card.Title>
    </Card.Body>
    </Card>
   
    </>
)
}

export default Post;