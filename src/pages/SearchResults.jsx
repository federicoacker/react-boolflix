import { useEffect } from "react";
import { useNavigate } from "react-router";
import MovieList from "../components/Main/MovieList"
import useMovie from "../hooks/useMovie";

function SearchResults() {
    const { isLoaded, loadingError, queryUrl } = useMovie();
    const navigate = useNavigate();

    useEffect( () => {
        navigate(`/search${queryUrl}`);
    },[queryUrl, navigate])

    return (
        <div className="text-white bg-tertiary">
            {loadingError && <h1>{loadingError}</h1>}
            {(isLoaded) && <MovieList />}
        </div>
    )
}

export default SearchResults