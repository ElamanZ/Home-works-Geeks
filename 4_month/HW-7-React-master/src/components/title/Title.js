import React from 'react';
import {Card,Button, Col} from "react-bootstrap";

function Title({info}) {
    return (
        <Col xl={3}>
            <Card style={{ width: '100%', marginBottom: "15px" }}>
                <Card.Body>
                    <Card.Title>
                        <h3>Id: {info.id}</h3>
                    </Card.Title>
                    <Card.Text>
                        <p>Title: {info.title}</p>
                    </Card.Text>
                    <Button variant="danger">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Title;