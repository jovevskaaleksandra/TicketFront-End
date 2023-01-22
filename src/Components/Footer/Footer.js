import { Outlet, Link } from "react-router-dom";

const Footer = () => {
    return (
      <>
          <div className=" fixed-bottom text-warning" >
            <hr></hr>
            <i>Made by Aleksandra Jovevska</i>
          </div>
        <Outlet />
      </>
    )
  };
  
  export default Footer;