import { useEffect } from "react";
import { useState } from "react";

const API_URL = "https://api.themoviedb.org/3/search/multi";

function mapResults(arrayOfResults){
    const mappedResults = arrayOfResults.map(item =>{
        const nameKey = item.media_type === "tv" ? "name" : "title";
        const originalNameKey = item.media_type === "tv" ? "original_name" : "original_title";
        const adaptedScore = Math.ceil(item.vote_average/10 * 5);

        return {
            id:item.id,
            title:item[nameKey],
            original_title:item[originalNameKey],
            vote_average: adaptedScore ? adaptedScore : 1,
            original_language:item.original_language,
            imageSrc:item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` 
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Banier_ontbreekt.svg/960px-Banier_ontbreekt.svg.png?utm_source=commons.wikimedia.org&utm_campaign=gallery&utm_content=thumbnail"
        }
    });

    return mappedResults;
}


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