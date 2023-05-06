import React from "react";
import Navigation from "../../components/layout/Navigation";
import { Card } from "react-bootstrap";

function SearchPage() {
    return (
    <> 
    <Navigation/>
    <Card className="opacity">
        <Card.Title>Search</Card.Title>
        <Card.Text>Search function is comming soon</Card.Text>
    </Card>
    </>
    );
}

export default SearchPage;