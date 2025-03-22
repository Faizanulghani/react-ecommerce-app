const ItemCards = () => {
  return (
    <div className="container">
      <div className="d-flex ">
        <div className="overlay">
          <img src="items1.jpg" className="card-img-top" alt="..." />
          <div className="card-content d-flex">
            <h4>Men's Fashion</h4>
            <a href="#" className="shopNow">
              Shop Now
            </a>
          </div>
        </div>
        <div className="overlay">
          <img src="items2.jpg" className="card-img-top" alt="..." />
          <div className="card-content d-flex">
            <h4>Women's Fashion</h4>
            <a href="#" className="shopNow">
              Shop Now
            </a>
          </div>
        </div>
        <div className="overlay">
          <img src="items3.jpg" className="card-img-top" alt="..." />
          <div className="card-content d-flex">
            <h4>Baby Fashion</h4>
            <a href="#" className="shopNow">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
