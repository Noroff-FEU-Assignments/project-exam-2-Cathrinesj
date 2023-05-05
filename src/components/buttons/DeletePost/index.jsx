import axios from "axios";
import React, { useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { API } from "../../../constants/API";


function DeletePost() {
const [auth] = useContext(AuthContext);
const accessToken = auth.accessToken;
let { id } = useParams();
const url = API + `posts/${id}`;
const navigate = useNavigate();

const deletePost = () => {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    

    axios
    .delete(url, options)
    .then(response => {
        console.log("deleted successfully!", response);
        navigate(-1);
    })
    .catch(error => {
        console.log("something wnet wrong", error)
    })
}
return (
    <button onClick={deletePost}>Delete</button>
)
}

export default DeletePost;