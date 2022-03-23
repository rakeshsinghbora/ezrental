import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../Button/Button";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5 custom-color" to="/">ezRent</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="ms-2 nav-link active custom-color" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-2 custom-color" to="/about" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-2 custom-color" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex me-5">
                            <Button name="Login" className="btn btn-outline-dark ms-3 custom-color" type="submit" id="custom-color"/>
                            <Button name="SignUp" className="btn btn-outline-dark ms-3 custom-color" type="submit"/>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />

        </div>
    )
}

export default Navbar;
