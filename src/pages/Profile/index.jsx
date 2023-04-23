import React from "react";
import Navigation from "../../components/layout/Navigation";
import Profile from "../../components/Profile";
import ProfilePosts from "../../components/ProfilePosts";

function ProfilePage() {
    return (
    <> 
    <Navigation/>
    <Profile/>
    <ProfilePosts/>
    </>
    );
}

export default ProfilePage;