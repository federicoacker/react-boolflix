import { Row } from "react-bootstrap";
import Movie from "./Movie";

function MovieList({data, isLoaded}) {

    return (
        <Row className="row-gap-2 py-4">
            {(isLoaded) && data?.map(({ id, title, name, original_language, original_title, vote_average }) => {
                return <Movie
                    key={id}
                    title={title}
                    name={name}
                    original_language={original_language}
                    original_title={original_title}
                    vote_average={vote_average}
                />
            })}
        </Row>
    )
}

export default MovieList