import React from "react";
import { Container, Stack } from "react-bootstrap";
import Navigation from "../../components/layout/Navigation";
import Heading from '../../components/layout/Header'
import Profiles from "../../components/Profiles";

function ProfilesPage() {
    return (
    <> 
    <Stack gap={1} >
        <Navigation/>
        <Container fluid="md">
            <Heading title="Profiles"/>
            <Profiles/>
        </Container>
    </Stack>
    </>
    );
}

export default ProfilesPage;