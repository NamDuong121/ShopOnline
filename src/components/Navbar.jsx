import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

import SignUp from "./SignUp";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-4 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3" to="/">
            ZERDIO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fw-bold"
                  aria-current="page"
                  to="/"
                >
                  Trang Chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/products">
                  Sản Phẩm
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/about">
                  Giới Thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/contact">
                  Liên Hệ
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <LoginForm Login={Login} />
              <SignUp />
              <Link to="/cart" className="btn btn-outline-secondary ms-2">
                <i className="fa fa-shopping-cart fs-5" aria-hidden="true">
                  <span className="text-danger fw-bold">
                    {state.length === 0 ? "" : `(${state.length})`}
                  </span>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
