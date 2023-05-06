import React from "react";
import Navigation from "../../components/layout/Navigation";
import Profile from "../../components/Profile";
import ProfilePosts from "../../components/ProfilePosts";
import { Container } from "react-bootstrap";
import Heading from "../../components/layout/Header";

function ProfilePage() {
    return (
    <> 
    <Navigation/>
    <Container fluid="md">
        <Profile/>
        <Heading title="Posts"/>   
        <ProfilePosts/>
    </Container>
    </>
    );
}

export default ProfilePage;