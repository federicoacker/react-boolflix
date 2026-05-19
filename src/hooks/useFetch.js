import { useState } from "react";
import { useEffect } from "react";
import { mapResults } from "../utils/functions";



function useFetch(URL) {
    const [data, setData] = useState([]);
    const [loadingError, setLoadingError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDP_READ_ACCESS_TOKEN}`
            }
        };
        fetch(`${URL}?include_adult=false&language=it-IT`, options)
            .then(response => response.json())
            .then(result => {
                const mediaTypedResults = result.results.map(element => ({
                    ...element,
                    media_type: element.name ? "tv" : "movie"
                }))
                const mappedMediaTypedResults = mapResults(mediaTypedResults);
                setData(mappedMediaTypedResults);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                setLoadingError(error);}
            );

        return () => {
            setIsLoaded(false);
        }
    },[URL]);

    return {
        data,
        loadingError,
        isLoaded: isLoaded
    };
}

export default useFetch;