import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from '../constants';
import { removeItem } from '../helpers/storage';
import { logoutUser } from '../slice/auth';

const Navbar = () => {
  const dispatch = useDispatch();

  const { loggedIn, user } = useSelector((state) => state.auth);
  const logoutHandler = () => {
    removeItem('token');
    dispatch(logoutUser());
  };

  return (
    <div
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      className="sticky-top"
    >
      <header className="d-flex flex-wrap align-items-center justify-content-between my-3">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to={'/'}
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="blogs-logo" width={'150px'} />
          </Link>
        </div>
        {/* register & login || user & LogOut */}
        <div className="col-md-3 text-end">
          {!loggedIn ? (
            <>
              <Link to={'/login'} className="me-2">
                <button type="button" className="btn btn-outline-secondary">
                  Login
                </button>
              </Link>
              <Link to={'/register'}>
                <button type="button" className="btn btn-secondary">
                  Sign-up
                </button>
              </Link>
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-end">
              <button className="btn btn-secondary">
                {user.username} <i className="fa-solid fa-user" />
              </button>
              <button onClick={logoutHandler} className="btn btn-danger mx-2">
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
