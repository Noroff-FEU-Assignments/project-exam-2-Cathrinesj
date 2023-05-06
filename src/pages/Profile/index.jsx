import React from "react";
import Navigation from "../../components/layout/Navigation";
import Profile from "../../components/Profile";
import ProfilePosts from "../../components/ProfilePosts";
import { Container } from "react-bootstrap";

function ProfilePage() {
    return (
    <> 
    <Navigation/>
    <Container fluid="md">
        <Profile/>
        <ProfilePosts/>
    </Container>
    </>
    );
}

export default ProfilePage;