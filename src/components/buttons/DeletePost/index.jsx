import axios from "axios";
import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { API } from "../../../constants/API";


function DeletePost() {
const [auth] = useContext(AuthContext);
const accessToken = auth.name;
const { id } = useParams;
    

const deletePost = () => {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    

    axios
    .delete(API + `posts/${id}`, {options})
    .then(response => {
        console.log("deleted successfully!", response)
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