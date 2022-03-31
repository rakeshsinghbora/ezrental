import React from "react";
import VehicleCard from "../VehicleCard";
import Button from "../../Button/Button";
import VehicleFleetStarter from "../VehicleFleetStarter";

function Suv() {
    return (
        <>
            <VehicleFleetStarter />
            <div className="row Vehiclecardone">
                <VehicleCard
                    className="col-lg-4"
                    imgClassName="carCardOne"
                    url="/images/suv/suv1.jpg"
                />
                <VehicleCard
                    className="col-lg-4"
                    imgClassName="carCardOne"
                    url="/images/suv/suv2.jpg"
                />
                <VehicleCard
                    className="col-lg-4"
                    imgClassName="carCardOne"
                    url="/images/suv/suv3.jpg"
                />
            </div>
            <div className="row Vehiclecardtwo">
                <VehicleCard
                    className="col-lg-3 col-md-6"
                    imgClassName="carCardTwo"
                    url="/images/suv/suv4.jpg"
                />
                <VehicleCard
                    className="col-lg-3 col-md-6"
                    imgClassName="carCardTwo"
                    url="/images/suv/suv5.jpg"
                />
                <VehicleCard
                    className="col-lg-3 col-md-6"
                    imgClassName="carCardTwo"
                    url="/images/suv/suv6.jpg"
                />
                <VehicleCard
                    className="col-lg-3 col-md-6"
                    imgClassName="carCardTwo"
                    url="/images/suv/suv7.jpg"
                />
            </div>
            <div className="text-center">
            <Button className="btn btn-light btn-lg" name="Proceed" type="submit" id="showmore" />
            </div>

        </>
    )
}
export default Suv;