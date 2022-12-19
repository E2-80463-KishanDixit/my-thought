import React from "react";
import './Footer.css'

function Footer() {

    // const[year, setYear] = useState();

    var date = new Date().getFullYear();

    return (
      <> 
         <footer>
             <div>
             <p className="footer-para">coupyright ©️ {date} </p>
             </div>
             
         </footer>
      </>
    );
  }
  
  export default Footer;