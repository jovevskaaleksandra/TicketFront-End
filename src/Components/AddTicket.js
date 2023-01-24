import axios, * as others from 'axios';
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const AddTicket = () => {
    const [title, setTitle] = useState('movie.title');
    const [description, setDescription] = useState('movie.description');
    const [price, setPrice] = useState('movie.price');
    const navigate = useNavigate();

    var jsonData = { title, description, price };
    console.log('jsonData:',jsonData);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://localhost:9091/api/tickets/create', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => res.json())
        .then(() => {
            setTitle('');
            setDescription('');
            setPrice('');
        })
        .catch((err) =>{
            console.log(err.message);
        });
        navigate('/tickets');
    };

    return (
        <>
            <div className="w-50 p-3  mx-auto">
                <form className="form-control form-control-lg mb-3">
                    <label className=""><b>Title:</b></label>
                    <input id="title" type="text" className="form-control input-sm"  value={title}
                        onChange={(e) => { setTitle(e.target.value) }}></input><br></br>
                    <label><b>Description:</b></label>
                    <input id="description" type="text" className="form-control input-sm"  value={description}
                        onChange={(e) => { setDescription(e.target.value) }}></input><br></br>
                    <label><b>Price:</b></label>
                    <input id="price" type="text" className="form-control input-sm"  value={price}
                        onChange={(e) => { setPrice(e.target.value) }}></input><br></br>
                    <button className="btn btn-light col-12 .col-md-8" type="submit" onClick={handleSubmit}><b>Submit</b></button>
                </form>
            </div>
            <Outlet />
        </>

    )
}

export default AddTicket;