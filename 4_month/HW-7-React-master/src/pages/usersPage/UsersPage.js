import React from 'react';
import {Card,Button} from "react-bootstrap";

function UsersPage(props) {
    return (
        <>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h2>Users</h2></Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi error et iste iure laudantium nisi nobis similique tempore. A eum ex harum inventore nostrum odio praesentium quasi repellendus, saepe.</p>
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default UsersPage;