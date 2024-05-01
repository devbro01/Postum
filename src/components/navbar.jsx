import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logo } from "../constants";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      className="container sticky-top"
    >
      <header className="d-flex flex-wrap align-items-center justify-content-between my-3">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to={"/"}
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="blogs-logo" width={"150px"} />
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <Link to={"/"} className="nav-link px-2 text-dark" href="#">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/about"} className="nav-link px-2 text-dark" href="#">
              About
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          {!loggedIn ? (
            <>
              <Link to={"/login"} className="me-2">
                <button type="button" className="btn btn-outline-secondary">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button type="button" className="btn btn-secondary">
                  Sign-up
                </button>
              </Link>
            </>
          ) : (
            <div>
              <button className="btn btn-secondary">
                {user.username} <i className="fa-solid fa-user" />
              </button>
              <button onClick={null} className="btn btn-danger mx-2">
                LogOut <i className="fa-solid fa-right-from-bracket" />
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
