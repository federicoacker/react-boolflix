import { Card, Col } from "react-bootstrap"
import { Tooltip } from "react-tooltip"

function Movie({ title, name, original_language, original_title, vote_average }) {
    console.log(name);
    return (
        <Col xs={12} sm={6} md={4} data-bs-theme="dark">
            <Card>
                <Card.Header>
                    <Card.Title>
                        <h5>Titolo: {title}</h5>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {original_title !== title && <p>Titolo Originale:{original_title}</p>}
                        Lingua Originale: <span
                            className={`lang-icon lang-icon-${original_language}`}
                            data-tooltip-id="language-tooltip"
                            data-tooltip-content={original_language}
                        />
                    </Card.Text>
                    <Tooltip id="language-tooltip" />
                    <Card.Text>
                        Voto: {vote_average};
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Movie