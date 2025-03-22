import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="container header">
      <header>
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="shop" className="nav-link px-2">
              Men
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Women
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Baby Collection
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Pages
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Contact
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end textSize d-flex align-items-center justify-content-end gap-4 m-0">
          <IoIosSearch />
          <LuUserRound />
          <span className="badge bg-danger">
           <Link to="cart" className="text-decoration-none cartItem black-500" > <BsCart3 className="cart" /> {cart.length}</Link>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
