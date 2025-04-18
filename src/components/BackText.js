import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {HashLink} from "react-router-hash-link";

export const BackText = ({text}) => {
    return (
        <section>
            <Container className="content_container">
                <div className="backtop">
                    <HashLink to="/#home" style={{textDecoration: 'none'}}>
                        <h2>
                            {text}
                        </h2>
                    </HashLink>
                </div>
            </Container>
        </section>
    )
}
