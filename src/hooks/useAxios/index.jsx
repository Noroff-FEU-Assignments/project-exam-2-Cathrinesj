import { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { API } from "../../constants/API";

const url = API;

export default function useAxios() {
    const [auth] = useContext(AuthContext);

    const apiClient = axios.create({
        baseURL: url,
        });

        apiClient.interceptors.request.use(function (config) {
            const token = auth.accessToken;
            config.headers.Authorization = token ? `Bearer ${token}` : "";
            return config; 
        });

        return apiClient
}