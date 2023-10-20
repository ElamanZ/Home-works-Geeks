import React, {useEffect, useState} from 'react';
import Title from "../../components/title/Title";
import {Container, Row} from "react-bootstrap";

function TitlePage(props) {
    const [title, setTitle] = useState([])
    const [loading, setLoading] = useState(false)

    const getTitle = () => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setTitle(data)
                setLoading(false)
            })

    }
    useEffect(getTitle, [])

    return (
        <Container>
            <Row>
                {
                    loading === true
                        ?
                        <div>Loading</div>
                        :
                        title.slice(0,16).map(title => <Title info={title}/>)
                }
            </Row>

        </Container>
    );
}

export default TitlePage;