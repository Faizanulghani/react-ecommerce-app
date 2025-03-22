import { useDispatch, useSelector } from "react-redux";
import { minus, plus, removeCart } from "../reducer/cartSlice";
import { Link } from "react-router";

const Cart = () => {
  let cartItems = useSelector((state) => state.cart.cart);
  let dispatch = useDispatch();
  let subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart_area container">
      <div className="container">
        <div className="cart_inner">
          {cartItems.length == 0 ? (
            <h2 className="text-center p-4">Shopping Now</h2>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="media d-flex m-0 justify-content-start align-items-center">
                            <div className="d-flex m-0">
                              <img
                                src={item.thumbnail}
                                style={{ width: "50px" }}
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <p className="m-0">{item.title}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>${item.price}</h5>
                        </td>
                        <td>
                          <div className="product_count">
                            <button
                              className="input-number-decrement btn btn-secondary m-2"
                              onClick={() => dispatch(plus(item.id))}
                            >
                              {" "}
                              +{" "}
                            </button>
                            <input
                              className="input-number"
                              type="text"
                              value={item.quantity}
                              min="0"
                              max="10"
                            />
                            <button
                              className="input-number-increment btn btn-danger m-2"
                              onClick={() => dispatch(minus(item.id))}
                            >
                              {" "}
                              -{" "}
                            </button>
                          </div>
                        </td>
                        <td>
                          <h5>${item.price * item.quantity}</h5>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={() => dispatch(removeCart(item.id))}
                          ></button>
                        </td>
                      </tr>
                    );
                  })}

                  <tr className="bottom_button">
                    <td>
                      <Link className="btn" to="/shop">
                        Continue Shopping
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="cupon_text float-right">
                        <Link className="btn" to="/cart/checkout">
                          Proceed to checkout
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>${subTotal.toFixed(2)}</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
