import { Card, Col } from "react-bootstrap"

function Movie({ title, original_language, original_title, vote_average }) {
    return (
        <Col xs={12} sm={6} md={4} data-bs-theme="dark">
            <Card>
                <Card.Header>
                    <Card.Title>
                        <h5>Titolo: {title}</h5>
                        {original_title !== title}<h5>Titolo Originale:{original_title}</h5>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Lingua Originale: {original_language};
                    </Card.Text>
                    <Card.Text>
                        Voto: {vote_average};
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Movie