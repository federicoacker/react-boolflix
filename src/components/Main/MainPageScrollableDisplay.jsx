import useFetch from "../../hooks/useFetch";
import ScrollingList from "./ScrollingList";

function MainPageScrollableDisplay({API_URL, title}) {
    const { data, loadingError, isLoaded } = useFetch(API_URL);
    return (
        <>
        {isLoaded && <h2>{title}</h2>}
        <ScrollingList data={data} loadingError={loadingError} isLoaded={isLoaded} />
        </>
    )
}

export default MainPageScrollableDisplay