import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function TabloPage() {
    const [tablo, setTablo] = useState(0)

    const increment = () => {
        setTablo(tablo +1)
    }
    const decrement = () => {
        setTablo(tablo-1)
    }

    return (
        <>
            <h1>{tablo}</h1>
            <Button variant="success" onClick={increment}>+</Button>
            <Button variant="danger" onClick={decrement}>-</Button>
        </>
    );
}

export default TabloPage;