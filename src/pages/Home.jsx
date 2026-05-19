import { Container, Row } from "react-bootstrap"
import PopularMovies from "../components/Main/PopularMovies"
import TopRatedMovies from "../components/Main/TopRatedMovies"
import UpcomingMovies from "../components/Main/UpcomingMovies"
import PopularSeries from "../components/Main/PopularSeries"
import TopRatedSeries from "../components/Main/TopRatedSeries"


function Home() {
    return (
        <div className="text-white bg-tertiary">
        <Container>
            <Row>
                <PopularMovies/>
            </Row>
            <Row>
                <TopRatedMovies/>
            </Row>
            <Row>
                <UpcomingMovies/>
            </Row>
            <Row>
                <PopularSeries/>
            </Row>
            <Row>
                <TopRatedSeries/>
            </Row>
        </Container>
        </div>
    )
}

export default Home