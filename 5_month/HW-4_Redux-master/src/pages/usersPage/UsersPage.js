import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserActions, fetchUserOneActionInfo} from "../../redux/actions/actions";
import User from "../../components/user/User";

function UsersPage(props) {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)

    const getUsers = (e) => {
        dispatch(fetchUserActions(e.target.value))
        dispatch(fetchUserOneActionInfo(e.target.value))
    }



    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User key={user.id} userInfo={user}/>)}
        </div>
    );
}

export default UsersPage;