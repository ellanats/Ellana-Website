import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import PageCardList from "../PageCardList";

function BlackWhite({ images }) {
    const pencilUrl = images.filter((images) => {
        return !images.featured && images.path.includes('black-white');
    });

    return (
        <div>
            <Container className="container-fluid sticky-top p-0">
                <Row >
                    <Col className="text-center p-0">
                        <PageCardList images={pencilUrl} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default BlackWhite;