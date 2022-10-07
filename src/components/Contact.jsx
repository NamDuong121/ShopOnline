import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container contact-wrap">
        <div className=" mb-3">
          <img
            src="./assets/slide/contact-img.jpeg"
            className="card-img-top"
            alt="contact-bg"
          />
          <div className="card-body">
            <h3 className="card-title text-center mt-5 mb-5">
              Địa chỉ và liên hệ ZERDIO
            </h3>
            <hr />
            <p className="card-text text-secondary">
              Liên hệ để được tư vấn chi tiết về những chiếc mũ lưỡi trai nam
              đẹp hay mũ lưỡi trai nữ đẹp theo thông tin dưới đây:
            </p>
            <p className="card-text">
              <span className="fw-bold text-secondary">Hotline:</span>
              <span className="text-secondary">0931.959.171</span>
            </p>
            <p className="card-text">
              <span className="fw-bold text-secondary">Website:</span>
              <span className="text-secondary">www.Zerdio.com.vn</span>
            </p>
            <p className="card-text">
              <span className="fw-bold text-secondary">Facebook:</span>
              <span className="text-secondary">
                https://www.facebook.com/NamDuong/
              </span>
            </p>
            <p className="card-text">
              <span className="fw-bold text-secondary">Địa chỉ:</span>
              <span className="text-secondary">
                95 Đỗ Đăng Đệ - Hoà Xuân - Cẩm Lệ - Đà Nẵng
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
