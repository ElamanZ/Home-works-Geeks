import React from 'react';
import {Card,Button} from "react-bootstrap";

function TextPage() {


    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda, consectetur cupiditate dignissimos doloremque ea eos et expedita labore laudantium natus neque optio quia quibusdam reprehenderit sapiente, unde vero, vitae?
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>

            </Card>
    );
}

export default TextPage;