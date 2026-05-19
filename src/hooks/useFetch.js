import { useState } from "react";
import { useEffect } from "react";

const UPCOMING_MOVIES_API_URL = "https://api.themoviedb.org/3/movie/upcoming";
const TOP_RATED_MOVIES_API_URL = "https://api.themoviedb.org/3/movie/top_rated";
const POPULAR_MOVIES_API_URL = "https://api.themoviedb.org/3/movie/popular";

const POPULAR_SERIES_API_URL = "https://api.themoviedb.org/3/movie/popular";
const TOP_RATED_SERIES_API_URL = "https://api.themoviedb.org/3/tv/top_rated";


function useFetch(URL) {
    const [data, setData] = useState([]);
    const [loadingError, setLoadingError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(result => {
                setLoaded(true);
                setData(result);
            })
            .catch(error => setLoadingError(error));

        return () => {
            setLoaded(false);
        }
    },[]);

    return {
        data,
        loadingError,
        loaded
    };
}

export default useFetch;