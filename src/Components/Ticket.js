import React, { useEffect, useState }  from "react";
import { Outlet, Link, useParams } from "react-router-dom";

const Ticket = () => {
    let {id} = useParams();    
    const [ticket, setTicket] = useState([]);
    const [disable, setDisable] = useState(false);
    
    
    useEffect(() => {
        fetch(`https://localhost:9091/api/tickets/${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setTicket(data)
        })
    }, [])
    
    //funkcija so use effect za delete ticket
    function deleteTicket (){
       fetch(`https://localhost:9091/api/tickets/delete/${id}`, {
            method: 'DELETE'
       })
       .then(()=>
        alert("Successfuly deleted"))
    }

    

    return(
        <>
        <div className="w-25 p-3  mx-auto">
            <div className="d-flex justify-content-center">
                <img 
                    src={`https://robohash.org/${ticket.id}`}
                    style={{width: "30%"}}/>
            </div>
            <div>
                <h3 className="text-primary text-center">{ticket.title}</h3>
            </div>
            <div>
                <label className="text-light bg-dark"><b>Description:</b></label>
                <p>{ticket.description}</p>
            </div>
            <div>
                <label className="text-light bg-dark"><b>Price:</b></label>
                <h3>{ticket.price}$</h3>
            </div>
            <div className="d-flex justify-content-center">
            <Link onClick={deleteTicket} className="btn btn-danger" to={"/tickets"}>Delete ticket for this movie</Link>  
            </div>
        </div>
        <Outlet />
        </>
        
    )
}

export default Ticket;