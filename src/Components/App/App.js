import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tickets from "../Tickets";
import Layout from '../Layout';
import Header from '../Header/header';
import AddTicket from '../AddTicket';
import Footer  from '../Footer/Footer';
import './App.css';
import Ticket from '../Ticket';
import { Component } from "react";

class App extends Component{
   

    render(){
      return(
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route path="/tickets" element={<Tickets />}></Route> 
            <Route path="/tickets/add" element={<AddTicket />}></Route>      
            <Route path="/tickets/:id" element={<Ticket />}></Route> 
          </Routes>
        <Footer/>
        </BrowserRouter>
      );
    }
  
}


export default App;
