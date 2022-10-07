import React from "react";

const SignUp = () => {
  return (
    <div className="ms-2">
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-secondary ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#signUpModal"
        >
          <i className="fa fa-user-plus fs-5" aria-hidden="true"></i>
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="signUpModal"
          tabIndex="-1"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="loginModalLabel">
                  Đăng Ký
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
                  Đăng Ký Với Tài Khoản Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-facebook me-2"></span>
                  Đăng Ký Với Tài Khoản Facebook
                </button>
                <form>
                  <div className="mb-3">
                    <label htmlFor="userNameInput" className="form-label">
                      Tên Đăng Nhập
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userNameInput"
                      aria-describedby="userNameHelp"
                    />
                    <div id="userNameHelp" className="form-text">
                      * Tên đăng nhập tối thiểu 6 kí tự
                    </div>
                    <div className="mb-3">
                      <label htmlFor="inputEmailSignUp" className="form-label">
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmailSignUp"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPasswordSignUp" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPasswordSignUp"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mt-5">
                    Đăng Ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
