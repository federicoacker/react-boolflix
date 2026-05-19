import useFetch from "../../hooks/useFetch";
import ScrollingList from "./ScrollingList";

const TOP_RATED_SERIES_API_URL = "https://api.themoviedb.org/3/tv/top_rated";

function TopRatedSeries() {
    const { data, loadingError, isLoaded } = useFetch(TOP_RATED_SERIES_API_URL);

    return (
        <ScrollingList data={data} loadingError={loadingError} isLoaded={isLoaded}/>
    )
}

export default TopRatedSeries