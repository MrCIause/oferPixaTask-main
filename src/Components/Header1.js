import React from "react";
import { Link } from "react-router-dom";

export default function Header1() {
  return (
    <header className="container-fluid bg-warning">
      <div className="container p-2">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>My logo</h2>
          </div>
          <nav className="col-auto">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vip">V.I.P</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/pixa">Pixa</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/map1">Map1</Link>
              </li>
              <li>
                <Link to="/map2">Map Jerusalem</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
