import React  from "react";
import { Outlet, Link } from "react-router-dom";


const AddTicket = (props) => {
    return(
        <>
        <div className="w-50 p-3  mx-auto">
            <form className="form-control form-control-lg mb-3">
                <label className=""><b>Title:</b></label>
                <input type="text" className="form-control input-sm"></input><br></br>
                <label><b>Description:</b></label>
                <input type="text" className="form-control input-sm"></input><br></br>
                <label><b>Price:</b></label>
                <input type="text" className="form-control input-sm"></input><br></br>
                <button type="submit" className="btn btn-light col-12 .col-md-8"><b>Submit</b></button>
            </form>
        </div>
        <Outlet />
        </>
        
    )
}

export default AddTicket;