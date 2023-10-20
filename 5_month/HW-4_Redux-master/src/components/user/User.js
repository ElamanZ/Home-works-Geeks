import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUserOneActionInfo, fetchUserActions} from "../../redux/actions/actions";

function User({userInfo}) {

    const dispatch = useDispatch()

    const getUsersInfoo = (e) => {
        dispatch(fetchUserOneActionInfo(e.target.value))
        dispatch(fetchUserActions(e.target.value))
    }

    return (
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.email}</li>
            <li><button onClick={getUsersInfoo} value={userInfo.id}>show info</button></li>
        </ul>
    );
}

export default User;