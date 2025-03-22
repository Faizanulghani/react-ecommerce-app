import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(true);
  let [range, setRange] = useState(1000);
  useEffect(() => {
    let chachedData = localStorage.getItem("products")
    if (chachedData) {
      setProduct(JSON.parse(chachedData))
      setLoading(false);
    }else{
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.products)
          localStorage.setItem("products",JSON.stringify(data.products))
          setLoading(false);
        });
    }
  }, []);

  let changeRange = (e) => {
    setRange(e.target.value);
  };

  let filteredProducts =
    range >= 1000 ? product : product.filter((p) => p.price <= range);

  return (
    <div className="container d-flex shopDetails">
      {loading ? (
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Shop;
