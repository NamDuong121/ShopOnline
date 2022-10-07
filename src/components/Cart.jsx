import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => handleClose(cartItem)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p>
                {" "}
                {cartItem.price && cartItem.price.toLocaleString()}{" "}
                <i>{` VND`}</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const isEmptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3 className="text-center">
              <i>Giỏ hàng trống</i>
            </h3>
          </div>
        </div>
      </div>
    );
  };

  const checkOut = () => {
    return (
      <div className="container">
        <div className="row">
          <Link
            to="/checkout"
            className="btn btn-outline-success mb-5 w-25 fw-bold mx-auto"
          >
            Thanh toán
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-wrap">
      {state.length === 0 && isEmptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkOut()}
    </div>
  );
};

export default Cart;
