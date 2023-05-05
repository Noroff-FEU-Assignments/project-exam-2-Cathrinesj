import React from "react";
import Navigation from "../../components/layout/Navigation";
import Post from "../../components/Post";
import PostComments from "../../components/PostComments/indes";
import CommentForm from "../../components/forms/CommentForm";
import DeletePost from "../../components/buttons/DeletePost";

function PostPage() {
    return (
    <> 
    <Navigation/>
    <Post/>
    <h2 className="opacity">Comments</h2>
    <CommentForm/>
    <PostComments/>
    </>
    );
}

export default PostPage;