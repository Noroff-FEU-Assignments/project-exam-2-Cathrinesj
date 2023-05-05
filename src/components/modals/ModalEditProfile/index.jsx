import { Button, Modal } from "react-bootstrap";
import EditProfileForm from "../../forms/EditProfile";
import { useState } from "react";

function ModalEditProfile() {
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
            <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body><EditProfileForm/></Modal.Body>
            </Modal>
            </>
    )
}

export default ModalEditProfile;