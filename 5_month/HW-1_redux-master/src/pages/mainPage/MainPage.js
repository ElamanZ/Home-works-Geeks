import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function MainPage(props) {

    const dispatch = useDispatch()
    const num = useSelector(state => state.num)
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
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
}

export default MainPage;