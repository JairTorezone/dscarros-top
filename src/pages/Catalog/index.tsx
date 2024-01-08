import "./styles.css";

import Input from "components/Input";
import ProductCard from "components/ProductCard";

function Catalog() {
  return (
    <div className="catalog-container">
      <div className="form">
        <form className="form-container">
          <Input />
        </form>
      </div>
      <div className="catalog-cards-container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
