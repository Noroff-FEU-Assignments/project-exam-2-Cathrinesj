import axios from "axios";
import React, { useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { API } from "../../../constants/API";
import ThumbsUp from "../../../icons/ThumbsUp.svg"


function LikeIcon() {
const [auth] = useContext(AuthContext);
const accessToken = auth.accessToken;
let { id } = useParams();
const like = ThumbsUp;
const url = API + `posts/${id}/react/👍`;
const navigate = useNavigate();


const likeIcon = () => {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    

    axios
    .put(url, options)
    .then(response => {
        console.log("Liked it!", response);
        navigate(-1);
    })
    .catch(error => {
        console.log("something went wrong", error)
    })
}
return (
    <img src={ThumbsUp} className="icons" onClick={likeIcon}/>
)
}

export default LikeIcon;