import { Link } from 'react-router-dom';
import {homepageNavigation} from "../../data/navigationArray";

function Homepage() {

// setting types to be expected 
  interface itemObjects {
    title: string,
    id: number,
    class: string,
    link: string
  };

  return (
    <div className="container">
      <div className="row">
      {homepageNavigation.map((link:itemObjects) => {
        return (
          <div className="col-md-6 homepageLinkContainer" key={link.id}>
            <Link 
            to={link.link} 
            className={`homepageLinks ${link.class}`} 
            >
            {link.title}
           </Link>
          </div>
        );
      })}
    </div>
  </div>
  );
}
export default Homepage
