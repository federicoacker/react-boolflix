import { useState } from "react";
import { useEffect } from "react";

function useDetails(URL) {
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
                setIsLoaded(true);
                const mediaTypedResults = {
                    title: result.name ? result.name : result.title,
                    original_title: result.original_name ? result.original_name: result.original_title,
                    id: result.id,
                    media_type: result.media_type,
                    adaptedVote: result.vote_average /2,
                    original_language: result.original_language,
                    overview: result.overview,
                    imageSrc: result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Banier_ontbreekt.svg/960px-Banier_ontbreekt.svg.png?utm_source=commons.wikimedia.org&utm_campaign=gallery&utm_content=thumbnail"
                }
                setData(mediaTypedResults);
            })
            .catch(error => {
                setIsLoaded(false);
                setLoadingError(error);
            }
            );

        return () => {
            setIsLoaded(false);
        }
    }, [URL]);

    return {
        data,
        loadingError,
        isLoaded: isLoaded
    };
}

export default useDetails;