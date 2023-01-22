import React from 'react';
import {Link} from 'react-router-dom';


const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mx-auto" href="#"><b>Tickets App</b></a>
            </nav>
            <div className='progress-bar bg-warning'>
            <i >Use this app to view tickets, add tickets or delete tickets</i>
            </div><br></br>
        </header>
    )
}

export default header;
