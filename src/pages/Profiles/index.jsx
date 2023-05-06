import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../../components/layout/Navigation";
import Heading from '../../components/layout/Header'
import Profiles from "../../components/Profiles";

function ProfilesPage() {
    return (
    <>
    <Navigation/>
    <Container fluid="md">
        <Heading title="Profiles"/>
        <Profiles/>
    </Container>
    </>
    );
}

export default ProfilesPage;