

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tickets from "../Tickets";
import Layout from '../Layout';
import TicketService from '../../Repository/ticketRepository';
import Header from '../Header/header';
import AddTicket from '../AddTicket';
import Footer  from '../Footer/Footer';
import './App.css';
import Ticket from '../Ticket';

const App = () =>{
  

    return(
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/tickets" element={<Tickets />}></Route> 
          <Route path="/tickets/add" element={<AddTicket />}></Route>      
          <Route path="/tickets/tt" component={<Ticket />}></Route> 
        </Routes>
      <Footer/>
      </BrowserRouter>
    );
  

}


export default App;
