import { Row } from "react-bootstrap";
import Movie from "./Movie";
import useMovie from "../../hooks/useMovie"

function MovieList() {
    const {data, isLoaded } = useMovie();
    return (
        <Row className="row-gap-2 py-4">
            {(isLoaded) && data?.results?.map(({ id, title, original_language, original_title, vote_average }) => {
                return <Movie
                    key={id}
                    title={title}
                    original_language={original_language}
                    original_title={original_title}
                    vote_average={vote_average}
                />
            })}
        </Row>
    )
}

export default MovieList