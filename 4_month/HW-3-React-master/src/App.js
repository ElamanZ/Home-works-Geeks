import './App.css';
import React from "react";
import ClassComponentFirst from "./pages/classComponentFirst/ClassComponentFirst";
import ClassComponentSecond from "./pages/classComponentSecond/ClassComponentSecond";
import HelloBtn from "./components/helloBtn/HelloBtn";

function App() {
    const user = {name: "Anna", age: 19}
    return (
        <div className="App">
            <ClassComponentFirst userInfo = {user}/>
            <ClassComponentSecond userInfo = {user}/>
            <HelloBtn/>
        </div>
    );
}

export default App;
