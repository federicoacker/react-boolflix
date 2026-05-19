import useFetch from "../../hooks/useFetch";
import ScrollingList from "./ScrollingList";

const TOP_RATED_MOVIES_API_URL = "https://api.themoviedb.org/3/movie/top_rated";

function TopRatedMovies() {
    const { data, loadingError, isLoaded } = useFetch(TOP_RATED_MOVIES_API_URL);
    console.log(isLoaded);
    return (
        <ScrollingList data={data} loadingError={loadingError} isLoaded={isLoaded}/>
    )
}

export default TopRatedMovies