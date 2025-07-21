import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function shopLoader() {
  let res = await fetch("https://dummyjson.com/products");
  let data = await res.json();
  return data;
}

const Shop = () => {
  let posts = useLoaderData();
  let products = posts.products;
  let [range, setRange] = useState(1000);

  let changeRange = (e) => {
    setRange(e.target.value);
  };

  let filteredProducts =
    range >= 1000 ? products : products.filter((p) => p.price <= range);

  return (
    <div className="container d-flex shopDetails">
      <>
        <div className="filter">
          <h3>Price:</h3>
          <input
            type="range"
            value={range}
            onChange={(e) => changeRange(e)}
            min="0"
            max="1000"
          />
          <br />
          $0 to ${range}
        </div>
        <div className="d-flex mt-0 flex-wrap text-center pb-5 products">
          {filteredProducts.map((product) => {
            return (
              <div key={product.id} className="card-wrapper product d-flex">
                <div className="card" style={{ width: "18rem" }}>
                  <Link to={`/shop/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      className="d-block"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <div className="price d-flex justify-content-center gap-2">
                      <div className="curPrice">$ {product.price}</div>
                      <div className="prevPrice">$120.00</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Shop;
