import { Container, Row } from "react-bootstrap"
import PopularMovies from "../components/Main/PopularMovies"
import TopRatedMovies from "../components/Main/TopRatedMovies"
import UpcomingMovies from "../components/Main/UpcomingMovies"
import PopularSeries from "../components/Main/PopularSeries"
import TopRatedSeries from "../components/Main/TopRatedSeries"


function Home() {
    return (
        <div className="text-white bg-tertiary">
        <Container fluid="xxxl">
            <h2>I Film più popolari</h2>
            <PopularMovies/>
            <h2>I Film più votati</h2>
            <TopRatedMovies/>
            <h2>I Film in arrivo</h2>
            <UpcomingMovies/>
            <h2>Le serie tv più popolari</h2>
            <PopularSeries/>
            <h2>Le serie tv più votate</h2>
            <TopRatedSeries/>
        </Container>
        </div>
    )
}

export default Home