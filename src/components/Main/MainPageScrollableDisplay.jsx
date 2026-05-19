import useFetch from "../../hooks/useFetch";
import ScrollingList from "./ScrollingList";

function MainPageScrollableDisplay({API_URL}) {
    const { data, loadingError, isLoaded } = useFetch(API_URL);
    return (
        <ScrollingList data={data} loadingError={loadingError} isLoaded={isLoaded} />
    )
}

export default MainPageScrollableDisplay