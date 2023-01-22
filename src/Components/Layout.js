import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <hr></hr>
          <div class="row">
            <div className="btn btn-secondary border border-dark ">
                <Link className="nav-link" to={"/tickets"}>View tickets</Link>
            </div>
            <div className="btn btn-secondary border border-dark">
                <Link className="nav-link" to={"/tickets/add"}>Add ticket</Link>  
            </div>
            </div>
      <Outlet />
    </>
  )
};

export default Layout;