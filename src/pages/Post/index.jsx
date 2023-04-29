import React from "react";
import Navigation from "../../components/layout/Navigation";
import Post from "../../components/Post";
import PostComments from "../../components/PostComments/indes";
import CommentForm from "../../components/forms/CommentForm";

function PostPage() {
    return (
    <> 
    <Navigation/>
    <Post/>
    <CommentForm/>
    <h2 className="opacity">Comments</h2>
    <PostComments/>
    </>
    );
}

export default PostPage;