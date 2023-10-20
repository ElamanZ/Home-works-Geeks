import {useState} from 'react';

function AboutUs() {

    const [about, setAbout] = useState("Text")

    const text = () => {
        setAbout( "")
    }
    
    return (
        <>
            <h1>{about}</h1>
            <button onClick={text}>Button</button>
        </>
    );
}

export default AboutUs;