
import { useSearchParams } from "react-router";
import useSearch from "../hooks/useSearch";
import ItemCardList from "../components/Main/ItemCardList";

function SearchResults() {

    const [searchParams] = useSearchParams();
    const {data, loadingError, isLoaded} = useSearch(searchParams.get("query") ? searchParams.get("query") : "");
    
    return (
        <div className="text-white bg-tertiary">
            {loadingError && <h1>{loadingError}</h1>}
            {(isLoaded) && <ItemCardList data={data} isLoaded={isLoaded}/>}
        </div>
    )
}

export default SearchResults