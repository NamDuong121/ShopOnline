import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top p-5 bg-secondary align-items-center">
          <p className="mb-0 text-light">
            © 2022 Company, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li className="ms-3">
              <a className="fs-2 " href="#">
                <i
                  className="fa fa-twitter-square text-light"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="fs-2" href="#">
                <i
                  className="fa fa-instagram text-light"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="fs-2" href="#">
                <i
                  className="fa fa-facebook-official text-light"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
