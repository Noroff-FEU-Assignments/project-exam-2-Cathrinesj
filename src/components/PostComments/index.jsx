import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import LoadingSpinner from "../common/Spinner";
import GeneralError from "../common/GeneralError";
import { Stack } from "react-bootstrap";

function PostComments() {
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

    getData(`https://api.noroff.dev/api/v1/social/posts/${id}?_comments=true`);
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
        {data.comments.map((comment) => (
                <Card className="opacity mb-2" key={comment.id}>    
                <Card.Body>
                    <Stack direction="horizontal" gap={2}>
                        <Card.Img className="avatarImageSmall" src={comment.author.avatar}></Card.Img>
                        <Card.Text>{comment.author.name}</Card.Text>   
                    </Stack>    
                    <Card.Text> - {comment.body}</Card.Text>                 
                </Card.Body>
            </Card>  
        ) )}
    </div>
);
}

export default PostComments;