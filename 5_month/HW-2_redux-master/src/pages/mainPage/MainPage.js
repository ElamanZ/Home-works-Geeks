import React from 'react';
import {useDispatch, useSelector} from "react-redux";
function MainPage(props) {
    const dispatch = useDispatch()
    let num1 = useSelector(state => state.num1)
    let num2 = useSelector(state => state.num2)
    const result = useSelector(state => state.result)
    const changeInputOne = (event) => {
        dispatch({
            type: "VALUE1",
            payload: event.target.value
        })
    }
    const changeInputTwo = (event) => {
        dispatch({
            type: "VALUE2",
            payload: event.target.value
        })
    }
    const plus = () => {
        dispatch({
            type: "PLUS"
        })
    }
    const minus = () => {
        dispatch({
            type: "MINUS"
        })
    }
    const multiplied = () => {
        dispatch({
            type: "MULTIPLIED"
        })
    }
    const division = () => {
        dispatch({
            type: "DIVISION"
        })
    }

    return (
        <div className="mainPage">
            <h1>{result}</h1>
            <div className="input">
                <input value={num1} onChange={changeInputOne} type="number" placeholder="number1"/>
                <input value={num2} onChange={changeInputTwo} type="number" placeholder="number2"/>
            </div>
            <div className="btn">
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={multiplied}>*</button>
                <button onClick={division}>/</button>
            </div>
        </div>
    );
}

export default MainPage;