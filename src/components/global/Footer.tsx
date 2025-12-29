import * as React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";

function Footer() {
  return (
    <div className="globalFooter">
      <div className="divider"></div>
      <div className="container">
        <div className="row soMe">
          <div className="col-12 instagram">
            <Link to="https://www.instagram.com/haslalokkeberg/" target="_blank">Følg oss på Instagram</Link>
          </div>
          <div className="col-12 contact">
            <Link to="/kontakt-oss">Send oss e-post</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 containerAllRights">
          <p className="allRights">© 2025 <Link to="/">Hasla-Løkkeberg Agentur</Link></p>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Footer;
