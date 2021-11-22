import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritiesContext from "../store/favorities-contex";

function NavBar() {
  const favoritiesCtx = useContext(FavoritiesContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              React Meetups
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  All Meetups
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add_meetups">
                  Add New Meetups
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorities">
                  My Favorities{" "}
                  <span class="badge bg-secondary">
                    {favoritiesCtx.totalFavorites}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
