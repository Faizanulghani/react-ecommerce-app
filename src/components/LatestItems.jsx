const LatestItems = () => {
  return (
    <div className="container latest-items">
      <div className="nav d-flex">
        <div className="nav-title">
          <h2>Trending This Week</h2>
        </div>
        <div className="nav-tabs">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Baby
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Fashion
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        // data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper d-flex">
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest1.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest2.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest3.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest4.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper d-flex">
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest1.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest2.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest3.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="latest4.jpg" className="d-block" alt="..." />
                <div className="card-body">
                  <p className="card-text">Cashmere Tank + Bag</p>
                  <div className="price d-flex justify-content-center gap-2">
                    <div className="curPrice">$98.00</div>
                    <div className="prevPrice">$120.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default LatestItems;
