import axios from '../custom-axios/axios'

const TicketService = {
    fetchUsers: () => {
        return axios.get("/users");
    },
    getUser: (id) => {
        return axios.get("/users/${id}")
    },
    fetchTickets: () => {
        return axios.get("/tickets");
    },
    getTicket: (id) => {
        return axios.get("/tickets/${id}");
    },
    deleteTicket: (id) => {
        return axios.delete("/tickets/delete/${id}");
    },
    createTicket: (title, description, price) => {
        return axios.post("/tickets/create", {
            "Title": title,
            "Description": description,
            "Price": price
        });
    }
}
export default TicketService;