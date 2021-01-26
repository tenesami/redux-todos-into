import React from 'react';

 const NavBar = (props) => {
    return (
        <ul>
            <li> Number of lists - {props.todos.length}</li>
        </ul>
    )
}
export default NavBar;