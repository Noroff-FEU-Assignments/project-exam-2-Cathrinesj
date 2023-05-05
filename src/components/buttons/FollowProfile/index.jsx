import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../../constants/API";



function FollowProfile() {
const [auth] = useContext(AuthContext);
const accessToken = auth.accessToken;
let { id } = useParams();
const url = API + `profiles/${id}/follow`;
const navigate = useNavigate();

const followProfile = () => {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    

    axios
    .put(url, {} ,options)
    .then(response => {
        console.log("followed successfully!", response);
        navigate(0);
    })
    .catch(error => {
        console.log("something went wrong", error)
    })

    console.log(options)
}
return (
    <button onClick={followProfile}>Follow</button>
)
}

export default FollowProfile;