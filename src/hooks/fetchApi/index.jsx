import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";



function useApi (url) {
    const [auth] = useContext(AuthContext);
    const accessToken = auth.accessToken;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }

    useEffect(() => {   
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetchedData = await fetch(url, options);
                const json = await fetchedData.json();
                setData(json);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getData();

    }, [url]);
    return { data, isLoading, isError };
}

export default useApi;