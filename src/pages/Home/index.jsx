import React from "react";
import { Container, Stack } from "react-bootstrap";
import Navigation from "../../components/layout/Navigation";
import Heading from "../../components/layout/Header";
import Posts from "../../components/Posts";

function HomePage() {
    return (
    <> 
    <Stack gap={1} >
    <Navigation/>
    <Container fluid>
        <Heading title="Posts"/>
        <Posts/>
    </Container>
    </Stack>
    </>
    );
}

export default HomePage;

