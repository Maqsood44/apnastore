import React, { useContext, uses } from 'react'
import { Link } from 'react-router-dom'
function Navbars() {

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#26104f" }}>
        <div className="container-fluid">
          <Link to={"/"}>
            <img src="https://www.ekecommerce.com/wp-content/uploads/2023/04/EKEcommerce_Logo_Gold@2x.png" width="30" height="30" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx ms-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link active nav-bar-text"  >Home</Link>
              </li>
            </ul>

            <form className="d-flex" role="submit">
              <Link to="/login">
                <button className="btn btn-outline-success ms-5" type="submit">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline-primary ms-2" type="submit">Register</button>
              </Link>
            </form>
        </div>
      </div>
    </nav >

    </>
  )
}

export default Navbars

