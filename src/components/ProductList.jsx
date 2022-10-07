import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [filter, setFiler] = useState(productList);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProductList = async () => {
      setLoading(true);
      const requestURL = "http://localhost:3500/products";
      const response = await fetch(requestURL);
      if (componentMounted) {
        setProductList(await response.clone().json());
        setFiler(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted(false);
      };
    };
    getProductList();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProductList = (categoryProduct) => {
    const updateList = productList.filter(
      (product) => product.category === categoryProduct
    );
    setFiler(updateList);
  };
  const ShowProductList = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-secondary me-2 fw-bolder"
            onClick={() => setFiler(productList)}
          >
            Tất cả
          </button>
          <button
            className="btn btn-outline-secondary me-2 fw-bolder"
            onClick={() => filterProductList("Mũ Lưỡi Trai")}
          >
            Mũ Lưỡi Trai
          </button>
          <button
            className="btn btn-outline-secondary me-2 fw-bolder"
            onClick={() => filterProductList("Mũ Snapback")}
          >
            Mũ Snapback
          </button>
          <button
            className="btn btn-outline-secondary me-2 fw-bolder"
            onClick={() => filterProductList("Mũ Bucket")}
          >
            Mũ Bucket
          </button>
          <button
            className="btn btn-outline-secondary me-2 fw-bolder"
            onClick={() => filterProductList("Mũ Len")}
          >
            Mũ Len
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4 cart-list">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 15)}
                    </h5>
                    <p className="card-text lead fw-bold">
                      {product.price && product.price.toLocaleString()}{" "}
                      <i>{` VND`}</i>
                    </p>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-success fw-bold"
                    >
                      Mua Ngay
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5 content-wrap">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Sản phẩm</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProductList />}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
