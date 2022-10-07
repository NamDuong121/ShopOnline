import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-wrap">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="./assets/bg.jpeg"
          className="card-img about-image"
          alt="..."
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h3 className="card-title fw-bold">MISSION OF ZERDIO</h3>
          <p className="card-text w-75 text-center">
            Ấp ủ ước mơ trở thành thương hiệu nón mũ thời trang Việt vươn ra
            toàn cầu. ZERDIO không ngừng phát triển và hoàn thiện các dòng sản
            phẩm như mũ lưỡi trai, nón snapback, mũ bucket, mũ nồi, mũ phớt, mũ
            len để phục vụ nhu cầu đa dạng của khách hàng.
          </p>
          <p className="card-text w-75 text-center">
            ZERDIO với phương châm “Chất liệu tạo nên thương hiệu” dành tâm
            huyết cho những điều nhỏ nhất để mang đến cho khách hàng những giá
            trị bền vững.
          </p>
          <Link to="/" className="btn btn-outline-secondary text-white fw-bold">
            Trang Chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
