import { Link } from "react-router-dom";
import { infoProducts } from "../../data/InfoProducts";

function Products() {
  return (
    <div className="product-container">
      {infoProducts.map((item) => {
        return (
          <div key={item.id} className="products">
            <div className="container">
            <div className="row">
              <div className="col-sm-6 product-info">
                <h1>{item.headline}</h1>
                <p>{item.intro}</p>
              </div>
              <div className="col-sm-6 product-price">
                <p>Priser fra {item.cost}</p>
              </div>
            </div>
            <div className="row">
              <div className="col cta-products">
                  <Link to={item.link}>{item.more}</Link>
              </div>
            </div>
            </div>
          </div>
        );
       
      })}
      ;
    </div>
  );
}
export default Products;