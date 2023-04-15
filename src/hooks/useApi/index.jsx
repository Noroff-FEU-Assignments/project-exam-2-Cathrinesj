import { UseState, UseEffect } from "react";

function fetchApi (url) {
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

function useApi() {
    const { data, isLoading, isError } = fetchApi(
        'https://api.noroff.dev/api/v1/social/',
    );

    if (isLoading) {
        return <div>Loading</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return <div>Data loaded</div>
}

export default useApi;