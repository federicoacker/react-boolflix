
import { useSearchParams } from "react-router";
import MovieList from "../components/Main/MovieList"
import useSearch from "../hooks/useSearch";

function SearchResults() {

    const [searchParams] = useSearchParams();
    const {data, loadingError, isLoaded} = useSearch(searchParams.get("query") ? searchParams.get("query") : "");

    return (
        <div className="text-white bg-tertiary">
            {loadingError && <h1>{loadingError}</h1>}
            {(isLoaded) && <MovieList data={data} isLoaded={isLoaded}/>}
        </div>
    )
}

export default SearchResults