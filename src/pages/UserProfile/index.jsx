import React from "react";
import Navigation from "../../components/layout/Navigation";
import Profile from "../../components/Profile";
import ProfilePosts from "../../components/ProfilePosts";

function UserProfilePage() {
    return (
    <> 
    <Navigation/>
    <Profile/>
    <ProfilePosts/>
    </>
    );
}

export default UserProfilePage;