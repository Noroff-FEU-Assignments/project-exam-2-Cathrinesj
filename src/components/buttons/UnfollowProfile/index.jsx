import axios from "axios";
import React, { useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { API } from "../../../constants/API";


function UnfollowProfile() {
const [auth] = useContext(AuthContext);
const accessToken = auth.accessToken;
let { id } = useParams();
const url = API + `profiles/${id}/unfollow`;
const navigate = useNavigate();

const unfollowProfile = () => {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    

    axios
    .put(url, options)
    .then(response => {
        console.log("unfollowed successfully!", response);
        navigate(-1);
    })
    .catch(error => {
        console.log("something went wrong", error)
    })
}
return (
    <button onClick={unfollowProfile}>Unfollow</button>
)
}

export default UnfollowProfile;