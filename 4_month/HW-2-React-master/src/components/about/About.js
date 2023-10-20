

function About (props) {
    console.log(props)
    return (
        <>
            <p>title:{props.text.title}</p>
            <p>subtitle:{props.text.subtitle}</p>
        </>
    )
}

export default About;