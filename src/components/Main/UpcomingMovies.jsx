import useFetch from "../../hooks/useFetch";
import ScrollingList from "./ScrollingList";

const UPCOMING_MOVIES_API_URL = "https://api.themoviedb.org/3/movie/upcoming";

function UpcomingMovies() {
    const { data, loadingError, isLoaded } = useFetch(UPCOMING_MOVIES_API_URL);
    console.log(isLoaded);
    return (
        <ScrollingList data={data} loadingError={loadingError} isLoaded={isLoaded}/>
    )
}

export default UpcomingMovies