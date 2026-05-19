import { useState } from "react";
import { useEffect } from "react";

function useCredits(URL) {
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
                const cast = result.cast;
                const mappedCast = cast.map(({name, character, profile_path}) => {
                    return {
                        name,
                        character,
                        img:profile_path ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Banier_ontbreekt.svg/960px-Banier_ontbreekt.svg.png?utm_source=commons.wikimedia.org&utm_campaign=gallery&utm_content=thumbnail"
                    }
                }).filter((element, index) => index<5);

                setData(mappedCast);
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

export default useCredits;