import React from "react";
import Navigation from "../../components/layout/Navigation";
import Post from "../../components/Post";
import PostComments from "../../components/PostComments";
import CommentForm from "../../components/forms/CommentForm";
import { Card, Container } from "react-bootstrap";

function PostPage() {
    return (
    <> 
    <Navigation/>
    <Container fluid="md">
        <Post/>
        <CommentForm/>
        <Card className="opacity mb-2">
            <Card.Body>
                <Card.Title><h2>Comments</h2></Card.Title>
            </Card.Body>
        </Card>
        <PostComments/>
    </Container>
    </>
    );
}

export default PostPage;