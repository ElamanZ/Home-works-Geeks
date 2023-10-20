import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    fetchUsersAction,fetchUserOneActionInfo
} from "../../redux/actions/actions";
import User from "../../components/user/User";

class UsersPageClass extends Component {

    getUsers = () => {
        this.props.fetchUsersAction()
    }

    render() {
        return (
            <div>
                <ul>
                    <li>name:{this.props.user.name}</li>
                    <li>username:{this.props.user.username}</li>
                    <li>phone:{this.props.user.phone}</li>
                    <li>email:{this.props.user.email}</li>
                </ul>

                <button onClick={this.getUsers}>get users</button>

                {this.props.users.map(user => <User key={user.id} userInfo={user}/>)}
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
        user: state.usersReducer.users
    }
}

const mapDispatchToProps = {
    fetchUsersAction, fetchUserOneActionInfo
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersPageClass);