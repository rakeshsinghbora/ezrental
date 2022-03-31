import React from "react";
import VehicleCard from "../VehicleCard";
import Button from "../../Button/Button";
import VehicleFleetStarter from "../VehicleFleetStarter";
function Luxury() {
    return (
        <>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone">
                <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/Luxury/L1.jpg" />
                <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/Luxury/L2.jpg" />
                <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/Luxury/L3.jpg" />

            </div>
            <div className="row Vehiclecardtwo">
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/Luxury/L4.jpg" />
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/Luxury/L5.jpg" />
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/Luxury/L6.jpg" />
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/Luxury/L7.jpg" />
            </div>
            <div className="text-center">

            <Button className="btn btn-light btn-lg " name="Proceed" type="submit" id="showmore" />
            </div></>
    )
}

export default Luxury;