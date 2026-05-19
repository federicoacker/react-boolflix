import { Container } from "react-bootstrap"
import {homeEndpoints} from "../utils/tmdbEndpoints.js";
import MainPageScrollableDisplay from "../components/Main/MainPageScrollableDisplay.jsx";

function Home() {
    return (
        <div className="text-white bg-tertiary">
        <Container fluid="xxxl">
            {homeEndpoints.map(endpoint => {
                return(
                    <div key={endpoint.id}>
                        <h2>{endpoint.title}</h2>
                        <MainPageScrollableDisplay API_URL={endpoint.endpoint}/>
                    </div>
                )
            })}
        </Container>
        </div>
    )
}

export default Home