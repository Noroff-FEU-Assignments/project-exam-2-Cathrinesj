import { UseState, UseEffect } from "react";

function useApi (url) {
    const [data, setData] = UseState([]);
    const [isLoading, setIsLoading] = UseState(false);
    const [isError, setIsError] = UseState(false);

    UseEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetchedData = await fetch(url);
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