import React  from "react";
import  { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const Tickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() =>{
        fetch('https://localhost:9091/api/tickets')
        .then(reponse => reponse.json())
        .then(data => setTickets(data))
    }, [])

    return(
        <>
        <div>
        <Link className="btn btn-light col-12 .col-md-8" to={"/tickets/add"}><b>Add ticket</b></Link><br></br><br></br>
            <div>
                <div>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Picture</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Options:</th>
                            </tr>
                        </thead>
                       <tbody>
                        {tickets?.map((ticket) => (
                            <tr key={ticket.id}>
                                <td>{ticket.id}</td>
                                <td>
                                    <img 
                                    src={`https://robohash.org/${ticket.id}`}
                                    style={{width: "20%"}}
                                    />
                                </td>
                                <td>{ticket.title}</td>
                                <td>{ticket.description}</td>
                                <td>{ticket.price}$</td>
                                <td>
                                <Link className="btn btn-light" to={"/tickets/tt"} props={ticket}><b>View ticket</b></Link> <br></br> <br></br>
                                <Link className="btn btn-light" to={"/tickets"} ><b>Delete ticket</b></Link>  
                                </td>
                            </tr>
                        ))}
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Outlet />
        </>
        
    )
}

export default Tickets;