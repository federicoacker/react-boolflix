
import { Navigate } from "react-router";
import useMovie from "../hooks/useMovie"

function Home() {
    const {loadingError} = useMovie();
    return (
        <div className="text-white bg-tertiary">
            {loadingError && <h1>{loadingError}</h1>}
            {!loadingError && <Navigate to={`/search?query=""`}/>}
        </div>
    )
}

export default Home