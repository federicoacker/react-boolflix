import useFetch from "../../hooks/useFetch";
import ScrollingList from "./ScrollingList";


const POPULAR_MOVIES_API_URL = "https://api.themoviedb.org/3/movie/popular";

function PopularMovies() {
    const { data, loadingError, isLoaded } = useFetch(POPULAR_MOVIES_API_URL);
    console.log(isLoaded);
    return (
        <ScrollingList data={data} loadingError={loadingError} isLoaded={isLoaded}/>
    )
}

export default PopularMovies