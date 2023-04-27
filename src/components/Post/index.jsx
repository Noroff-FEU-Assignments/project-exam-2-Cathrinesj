import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Stack } from "react-bootstrap";
import ThumbsUp from '../../icons/ThumbsUp.svg'
import Comments from '../../icons/Comments.svg'
import Comment from '../../icons/Comment.svg'

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
            <Stack direction="horizontal" gap={3}>
            <Card.Img className="avatarImage" variant="top" src={data.author.avatar}/>
            <Card.Text>By:{data.author.name} </Card.Text>
            </Stack>
            <Card.Img variant="top" src={data.media}/>
            <Card.Text>{data.body}</Card.Text>
        </Card.Body>
    </Card>
    <Card className="opacity">
    <Card.Body>
        <Stack direction="horizontal" gap={3}>
            <img src={ThumbsUp} className="icons"/>
            <Card.Title>{data._count.reactions} </Card.Title>
            <img src={Comments} className="icons"/>
            <Card.Title>{data._count.comments} </Card.Title>
            <img src={Comment} className="icons"/>
            <Card.Title>Comment </Card.Title>
        </Stack>
    </Card.Body>
    </Card>
    </>
)
}

export default Post;