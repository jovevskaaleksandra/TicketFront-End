import userEvent from "@testing-library/user-event";
import React  from "react";
import { Outlet, Link, useParams } from "react-router-dom";

const Ticket = (props) => {
    console.log(props);
    return(
        <>
        <div className="w-25 p-3  mx-auto">
            <div className="text-light bg-dark">
                <label><b>Title:</b></label>
            </div>
            <div className="text-light bg-dark">
                <label><b>Description:</b></label>
            </div>
            <div className="text-light bg-dark">
                <label><b>Price:</b></label>
            </div>
        </div>
        <Outlet />
        </>
        
    )
}

export default Ticket;