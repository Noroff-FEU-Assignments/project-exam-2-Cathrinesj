import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export default function Heading({ title }) {
    return (
        <Card className="opacity mb-2">
           <Card.Body>
              <h1>{title}</h1>
            </Card.Body>
        </Card>        
    )
}

Heading.propTypes = {
    title: PropTypes.string,
}