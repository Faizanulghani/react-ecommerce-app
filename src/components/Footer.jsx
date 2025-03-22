import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="section-1">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
            <div className="col-md-3 mb-2 mb-md-0">
              <h3>Subscribe Newsletter</h3>
              <p>Subscribe newsletter to get 5% on all products.</p>
            </div>

            <div className="input">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>

            <div className="col-md-3 text-end textSize d-flex justify-content-end gap-4">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="section-2 d-flex">
          <img src="/logo2_footer.png" alt="" />
          <div className="footer-nav">
            <h4>Shop Men</h4>
            <ul>
              <li>
                <a href="#"> Clothing Fashion</a>
              </li>
              <li>
                <a href="#"> Winter</a>
              </li>
              <li>
                <a href="#"> Summer</a>
              </li>
              <li>
                <a href="#"> Formal</a>
              </li>
              <li>
                <a href="#"> Casual</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav">
            <h4>Shop Women</h4>
            <ul>
              <li>
                <a href="#"> Clothing Fashion</a>
              </li>
              <li>
                <a href="#"> Winter</a>
              </li>
              <li>
                <a href="#"> Summer</a>
              </li>
              <li>
                <a href="#"> Formal</a>
              </li>
              <li>
                <a href="#"> Casual</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav">
            <h4>Baby Collection</h4>
            <ul>
              <li>
                <a href="#"> Clothing Fashion</a>
              </li>
              <li>
                <a href="#"> Winter</a>
              </li>
              <li>
                <a href="#"> Summer</a>
              </li>
              <li>
                <a href="#"> Formal</a>
              </li>
              <li>
                <a href="#"> Casual</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-3">
          <p>
            Copyright ©2025 All rights reserved | This template is made with ❤️
            by Faizan Ul Ghani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
