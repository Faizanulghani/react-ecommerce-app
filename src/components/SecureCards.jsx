const SecureCards = () => {
  return (
    <div className="container d-flex secure-cards">
      <div className="secure-card" style={{ width: "18rem" }}>
        <img src="services1.svg" className="card-img-top" alt="services.svg" />
        <div className="card-body">
          <h5 className="card-title">Fast & Free Delivery</h5>
          <p className="card-text">Free delivery on all orders</p>
        </div>
      </div>
      <div className="secure-card" style={{ width: "18rem" }}>
        <img src="services2.svg" className="card-img-top" alt="services.svg" />
        <div className="card-body">
          <h5 className="card-title">Secure Payment</h5>
          <p className="card-text">Free delivery on all orders</p>
        </div>
      </div>
      <div className="secure-card" style={{ width: "18rem" }}>
        <img src="services3.svg" className="card-img-top" alt="services.svg" />
        <div className="card-body">
          <h5 className="card-title">Money Back Guarantee</h5>
          <p className="card-text">Free delivery on all orders</p>
        </div>
      </div>
      <div className="secure-card" style={{ width: "18rem" }}>
        <img src="services4.svg" className="card-img-top" alt="services.svg" />
        <div className="card-body">
          <h5 className="card-title">Online Support</h5>
          <p className="card-text">Free delivery on all orders</p>
        </div>
      </div>
    </div>
  );
};

export default SecureCards;
