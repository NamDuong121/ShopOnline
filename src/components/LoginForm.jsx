import React, { useState } from "react";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-secondary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <i className="fa fa-sign-in fs-5" aria-hidden="true"></i>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Đăng Nhập
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span>
                Đăng Nhập Với Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span>
                Đăng Nhập Với Facebook
              </button>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputEmailLogin" className="form-label">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmailLogin"
                    aria-describedby="emailHelp"
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    value={details.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPasswordLogin" className="form-label">
                    Mật Khẩu
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPasswordLogin"
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-5">
                  Đăng Nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
