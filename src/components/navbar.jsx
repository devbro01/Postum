import { Link } from "react-router-dom";
import logo from "../assets/Blogs.png";

const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between my-3">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to={"/"}
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="blogs-logo" width={"150px"} />
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a
              href="index.html"
              className="nav-link px-2 color-black link-dark"
            >
              Home
            </a>
          </li>

          <li>
            <a href="index.html" className="nav-link px-2 link-dark">
              About
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to={"login"}>
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
          </Link>
          <Link to={"register"}>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
