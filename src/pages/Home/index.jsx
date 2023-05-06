import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../../components/layout/Navigation";
import Heading from "../../components/layout/Header";
import Posts from "../../components/Posts";

function HomePage() {
    return (
    <> 
    <Navigation/>
    <Container fluid="md">
        <Heading title="Posts"/>
        <Posts/>
    </Container>
    </>
    );
}

export default HomePage;

