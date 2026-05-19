import { useState, useEffect } from "react";

const TV_GENRES_URL = "https://api.themoviedb.org/3/genre/tv/list?language=it";
const MOVIE_GENRES_URL = "https://api.themoviedb.org/3/genre/movie/list?language=it";

function useGenres() {
const [genres, setGenres] = useState([]);
const [loadingErrors, setLoadingErrors] = useState([]);

useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDP_READ_ACCESS_TOKEN}`
            }
        };

        const movieGenres = fetch(MOVIE_GENRES_URL, options)
            .then(response => response.json())
            .then(json => json.genres)
            .catch(error => setLoadingErrors([...loadingErrors, error]));

        const tvGenres = fetch(TV_GENRES_URL, options)
            .then(response => response.json())
            .then(json => json.genres)
            .catch(error => setLoadingErrors([...loadingErrors, error]))

        Promise.all([movieGenres, tvGenres]).then(result => setGenres(result));
}, [loadingErrors]);

return [genres, loadingErrors];
}

export default useGenres