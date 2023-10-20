import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addAction, clearAction} from "../../redux/action/action";
import {useState} from "react";

function MainPage() {
    const dispatch = useDispatch()
    const {numbers} = useSelector(state => state.mainReducer)
    const [n, setN] = useState("")

    const add = () => {
        if(n!==""){
            setN("")
            dispatch(addAction(n))
        }
        else {
            alert("Введите число")
        }
    }
    const clear = () => {
        dispatch(clearAction())
        setN("")
    }


    return (
        <div>
            <input
                type="number" value={n} onChange={(e) => {
                    setN(parseInt(e.target.value))
                }}/>
            <button onClick={add}>Add</button>
            <button onClick={clear}>Clear</button>
            <ul>
                {numbers.map((item,id)=><li key={id}>{item}</li>)}
            </ul>
        </div>
    );
}

export default MainPage;