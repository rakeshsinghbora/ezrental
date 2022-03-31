import React from "react";
import Button from "../Button/Button";
function VehicleFleetStarter() {
    return (
        <div id="vehicles">
            <h5>Only the best cars</h5>
            <h1>Our Vehicle Fleet</h1>
            <p>We provide our customers with the most incredible driving emotion.</p>
            <p>That's why we have only world class car in our fleet.</p>
            <div className="row mt-5 vehicles-row d-flex justify-content-center">
                <Button name="SuperCars" className="btn btn-md btn-light vehicles-btn" divclassname="col-lg-2 col-md-3" />
                <Button name="SUV" className="btn btn-md btn-dark vehicles-btn" divclassname="col-lg-2 col-md-3" />
                <Button name="Luxury" className="btn btn-md btn-light vehicles-btn" divclassname="col-lg-2 col-md-3" />
                <Button name="Sports" className="btn btn-md btn-dark vehicles-btn" divclassname="col-lg-2 col-md-3" />
                <Button name="Premium" className="btn btn-md btn-light vehicles-btn" divclassname="col-lg-2 col-md-3" />
            </div>
        </div>
    )
}
export default VehicleFleetStarter;