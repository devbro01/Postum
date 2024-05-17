import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logo } from '../constants'
import { removeItem } from '../helpers/storage'
import { logoutUser } from '../slice/auth'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loggedIn, user } = useSelector((state) => state.auth)
  const logoutHandler = () => {
    removeItem('token')
    dispatch(logoutUser())
  }

  const handleCreate = () => {
    navigate('/create-article')
  }

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} className="sticky-top">
      <header className="d-flex flex-wrap align-items-center justify-content-between my-3">
        <div className="col-md-3 my-1 mb-md-0">
          <Link to={'/'}>
            <img src={logo} alt="blogs-logo" width={'150px'} />
          </Link>
        </div>
        {/* register & login || user & LogOut */}
        <div className="col-md-3">
          {!loggedIn ? (
            <div className="d-flex align-items-center justify-content-end">
              <Link to={'/login'} className="me-2">
                <button type="button" className="btn btn-outline-dark">
                  Login
                </button>
              </Link>
              <Link to={'/register'}>
                <button type="button" className="btn btn-dark">
                  Sign-up
                </button>
              </Link>
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-end">
              <button
                className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-1"
                onClick={handleCreate}
              >
                Create <i className="fa-solid fa-plus" />
              </button>
              <button onClick={() => navigate('/profile')} className="btn btn-outline-dark mx-2 d-flex align-items-center justify-content-center gap-1">
                {user.username} <i className="fa-solid fa-user" />
              </button>
              <button
                onClick={logoutHandler}
                className="btn btn-danger d-flex align-items-center justify-content-center gap-1"
              >
                Logout <i className="fa-solid fa-right-from-bracket" />
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar
