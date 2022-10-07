import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { addCart } from "../redux/action";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3500/products/${params.id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={420} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <div className="d-flex gap-2">
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} />
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Đánh giá: {product.rating && product.rating.rate}
            <i className="fa fa-star text-warning" aria-hidden="true"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            {product.price && product.price.toLocaleString()}
            <i> {` VND`}</i>
          </h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-secondary px-4 py-2 fw-bold"
            onClick={() => addProduct(product)}
          >
            Thêm vào giỏ
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2 fw-bold">
            Giỏ hàng
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
