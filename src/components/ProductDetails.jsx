import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { addCart } from "../reducer/cartSlice";

const ProductDetails = () => {
  let [product, setProduct] = useState(null);
  let [loading, setLoading] = useState(true);
  const { productID } = useParams();
  let dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productID}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct(null);
        setLoading(false);
      });
  }, [productID]);
  
  if (loading) {
    return <div className="spinner-grow spinner text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>;
  }
  if (!product) {
    return <NotFound />;
  }

  let handleAddToCart = ()=>{
    let cartItem  ={
      id:product.id,
      title:product.title,
      price:product.price,
      thumbnail:product.thumbnail,
      quantity:1,
    }
    dispatch(addCart(cartItem))
  }

  return (
    <div className="product-details">
      <div className="container d-flex m-0 align-items-center">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-content">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p><strong>Price: </strong>${product.price}</p>
        <p><strong>SKU: </strong>{product.sku}</p>
        <button type="button" className="btn btn-danger" onClick={() => handleAddToCart()}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
