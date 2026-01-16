import { Link } from 'react-router-dom';
import {imagesForPortfolio} from "../../data/PortfolioWork";


function PortfolioNavigation() {
  // setting types to be expected
  interface itemObjects {
    title: string;
    id: number;
    class: string;
    link: string;
  }

  return (
    <div className="portfolio-container container">
      <div className="row">
        {imagesForPortfolio.map((work: itemObjects) => {
          return (
            <div className="col-md-6" key={work.id}>
              <Link
                to={work.link}
                className={`portfolio-cta-container ${work.class}`}
              >
                {work.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioNavigation;
