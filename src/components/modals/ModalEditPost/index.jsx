import { Button, Modal } from "react-bootstrap";
import UpdatePostForm from "../../forms/UpdatePostForm";
import { useState } from "react";

function ModalEditPost() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
        {values.map((v, idx) => (
            <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
             Edit
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Update Post</Modal.Title>
            </Modal.Header>
            <Modal.Body><UpdatePostForm/></Modal.Body>
            </Modal>
            </>
    )
}

export default ModalEditPost;