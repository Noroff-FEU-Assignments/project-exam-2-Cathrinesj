import React from "react";
import Navigation from "../../components/layout/Navigation";
import { Card, Container } from "react-bootstrap";

function SearchPage() {
    return (
    <> 
    <Navigation/>
    <Container>
      <Card className="opacity">
        <Card.Body>
          <Card.Title><h1>Search</h1></Card.Title>
          <Card.Text>Search function is comming soon</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
    );
}

export default SearchPage;