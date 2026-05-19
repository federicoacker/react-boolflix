
import { useSearchParams } from "react-router";
import useSearch from "../hooks/useSearch";
import ItemCardList from "../components/Main/ItemCardList";
import Genres from "../components/Main/Genres";

function SearchResults() {

    const [searchParams] = useSearchParams();
    const {data, loadingError, isLoaded} = useSearch(searchParams.get("query") ? searchParams.get("query") : "");
    
    return (
        <>
        <Genres/>
        <div className="text-white bg-tertiary">
            {loadingError && <h1>{loadingError}</h1>}
            {(isLoaded) && <ItemCardList data={data} isLoaded={isLoaded}/>}
            {!searchParams.get("query") && 
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="text-light-sublte"> Cerca qualcosa...</h2>
                </div>
            }
        </div>
        </>
    )
}

export default SearchResults