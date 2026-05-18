import { useEffect } from "react";
import { useState } from "react";

const API_URL = "https://api.themoviedb.org/3/search/movie";

function useSearch(query){
    const [data, setData] = useState({});
    const [loadingError, setLoadingError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    
    const options = {
        method:'GET',
        headers:{
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDP_READ_ACCESS_TOKEN}`
        }
    };    
    
    useEffect(() => {
        
        fetch(`${API_URL}?query=${query}&include_adult=false&language=it-IT`, options)
        .then(response => response.json())
        .then(json => {
            setIsLoaded(true);
            setData(json);
        })
        .catch(error => {
            setIsLoaded(false);
            setLoadingError(error);
        })
    }, [query]
    );

    return {
        data,
        loadingError,
        isLoaded
    }
}

export default useSearch