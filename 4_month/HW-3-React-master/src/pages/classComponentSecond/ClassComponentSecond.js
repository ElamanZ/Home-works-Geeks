import React from "react";
import classes from "./titleBlue.module.css"

class ClassComponentSecond extends React.Component {
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

export default ClassComponentSecond;