function HelloBtn(props){
    const Hello = (event) => {
        alert("Hello world")
        console.log(event.target = "Hello World")
    }
    return(
        <>
            <button onClick={Hello}>Button</button>
        </>
    )
}
export default HelloBtn