import React from "react";
import classes from "./titleRed.module.css"
class ClassComponentFirst extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ul className={classes.title2}>
                <li>name: {this.props.userInfo.name} </li>
                <li>age: {this.props.userInfo.age} </li>
            </ul>
        )
    }
}

export default ClassComponentFirst;