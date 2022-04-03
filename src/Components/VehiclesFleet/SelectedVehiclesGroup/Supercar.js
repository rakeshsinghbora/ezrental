import React from "react";
import VehicleCard from "../VehicleCard";
import Button from "../../Button/Buttons";
import VehicleFleetStarter from "../VehicleFleetStarter";

function Supercar() {
    return (
        <>
            <VehicleFleetStarter />
            <div className="row Vehiclecardone">
                <VehicleCard className="col-lg-4  col-md-4 col-sm-6 col-6" imgClassName="carCardOne" url="/images/zachary.png" />
                <VehicleCard className="col-lg-4  col-md-4 col-sm-6 col-6" imgClassName="carCardOne" url="/images/brandon.png" />
                <VehicleCard className="col-lg-4  col-md-4 col-sm-6 col-6" imgClassName="carCardOne" url="/images/spencer.png" />

            </div>
            <div className="row Vehiclecardtwo">
                <VehicleCard className="col-lg-3 col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/josh.png" />
                <VehicleCard className="col-lg-3 col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/alec.png" />
                <VehicleCard className="col-lg-3 col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/adrian.png" />
                <VehicleCard className="col-lg-3 col-md-3 col-sm-6 col-6" imgClassName="carCardTwo" url="/images/aaron.png" />

            </div>
            <div className="text-center">


            <Button className="btn btn-light btn-lg text-center" name="Proceed" type="submit" id="showmore" />
            </div>
        </>
    )
}

export default Supercar;