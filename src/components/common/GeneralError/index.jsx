import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function GeneralError() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! Something is not right here!</Alert.Heading>
        <p>
          Let's just try to start over, press the button and we will take you back to the beginning!
        </p>
        <Link to="/*"><Button onClick={() => setShow(true)}>Take me back</Button></Link>;
      </Alert>
    );
  }
}

export default GeneralError;