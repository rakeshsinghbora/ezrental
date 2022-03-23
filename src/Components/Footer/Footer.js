import React from "react";
import Getus from "../Features/Getus";

function Footer() {
    return (
        <div id="Footer">
            <hr />
                <Getus/>
            <div className="bootomcontentoffooter row">
                <div className="col-lg-3 footercard">
                    <h2>EzRentals</h2>
                    <h5>We create possibilities for the connected world.</h5>
                    <h5>Be Bold.</h5>
                </div>

                <div className="col-lg-2 footercard">
                    <h4>Explore</h4>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Capabilities</h5>
                    <h5>Career</h5>
                </div>

                <div className="col-lg-3 footercard">
                    <h4>Visit</h4>
                    <h5>Kumhar Mandi Telibagh Lucknow Uttar Pradesh</h5>
                </div>
                <div className="col-lg-2 footercard">
                    <h4>Follow</h4>
                    <h5>Instagram</h5>
                    <h5>Facebook</h5>
                    <h5>Twitter</h5>

                </div>
                <div className="col-lg-2 footercard">
                    <h4>Legal</h4>
                    <h5>Terms</h5>
                    <h5>Policy</h5>

                </div>
            </div>
        </div>
    )
}

export default Footer;