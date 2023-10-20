import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <ul className={"menu"}>
            <li>
                <NavLink to="/"
                         className={({isActive}) => isActive ? "active" : ""}

                >Title</NavLink>
            </li>
            <li>
                <NavLink to="/tablo"
                         className={({isActive}) => isActive ? "active" : ""}
                >Tablo</NavLink>
            </li>
            <li>
                <NavLink to="/contacts"
                         className={({isActive}) => isActive ? "active" : ""}

                >Contacts</NavLink>
            </li>
            <li>
                <NavLink to="/text"
                         className={({isActive}) => isActive ? "active" : ""}

                >Text</NavLink>
            </li>
            <li>
                <NavLink to="/users"
                         className={({isActive}) => isActive ? "active" : ""}

                >Users</NavLink>
            </li>
        </ul>
    );
}

export default Menu;