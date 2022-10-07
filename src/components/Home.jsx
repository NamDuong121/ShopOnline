import React from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner slide">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="./assets/slide/mu-luoi-trai.jpeg"
              className="d-block slide-image"
              alt="mu-luoi-trai"
            />
            <div className="carousel-caption d-none d-md-block slide-sub">
              <h3 className="fw-bolder">Mũ Lưỡi Trai</h3>
              <p>
                <em>
                  Chất liệu cao cấp - Thiết kế sang trọng - Mẫu mã đẳng cấp
                </em>
              </p>
              <Link
                to="/products"
                className="btn btn-outline-secondary text-white fw-bold"
              >
                Xem Ngay
              </Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/assets/slide/mu-snapback.jpeg"
              className="d-block slide-image"
              alt="mu-snapback"
            />
            <div className="carousel-caption d-none d-md-block slide-sub">
              <h3 className="fw-bolder">Mũ Snapback</h3>
              <p>
                <em>Nón Snapback chất liệu cao cấp</em>
              </p>
              <Link
                to="/products"
                className="btn btn-outline-secondary text-white fw-bold"
              >
                Xem Ngay
              </Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/assets/slide/mu-len.jpeg"
              className="d-block slide-image"
              alt="mu-len"
            />
            <div className="carousel-caption d-none d-md-block slide-sub">
              <h3 className="fw-bolder">Mũ Len</h3>
              <p>
                <em>Nón len ấm áp phù hợp trong nhiều hoàn cảnh</em>
              </p>
              <Link
                to="products"
                className="btn btn-outline-secondary text-white fw-bold"
              >
                Xem Ngay
              </Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/assets/slide/mu-bucket.jpeg"
              className="d-block slide-image"
              alt="mu-bucket"
            />
            <div className="carousel-caption d-none d-md-block slide-sub">
              <h3 className="fw-bolder">Mũ Bucket</h3>
              <p>
                <em>Nón bucket chất liệu cao cấp, bền bỉ với thời gian</em>
              </p>
              <Link
                to="/products"
                className="btn btn-outline-secondary text-white fw-bold"
              >
                Xem Ngay
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
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
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <ProductList />
    </div>
  );
};

export default Home;
