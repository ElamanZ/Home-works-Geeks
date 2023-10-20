import About from "../../components/about/About";

function AboutUs() {
    const text = {
        title: "hello",
        subtitle: "lorem lorem lorem"
    }
    return (
        <>
            <h1>About Us</h1>
            <About text={text}/>
        </>
    );
}

export default AboutUs;