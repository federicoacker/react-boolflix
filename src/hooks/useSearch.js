import { useEffect } from "react";
import { useState } from "react";
import { mapResults } from "../utils/functions.js";

const API_URL = "https://api.themoviedb.org/3/search/multi";

function useSearch(query) {
    const [data, setData] = useState({});
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

        fetch(`${API_URL}?query=${query}&include_adult=false&language=it-IT`, options)
            .then(response => response.json())
            .then(json => {
                const excludePeople = json.results.filter(item => item.media_type !== "person");
                const mappedProperly = mapResults(excludePeople);
                setIsLoaded(true);
                setData(mappedProperly);
                console.log("LOADED");
            })
            .catch(error => {
                setIsLoaded(false);
                setLoadingError(error.message);
            })
    }, [query]
    );

    return {
        data,
        loadingError,
        isLoaded,
    }
}

export default useSearch