import React from "react";
import Button from "../Button/Button";
import VehicleCard from "./VehicleCard"
import VehicleFleetStarter from "./VehicleFleetStarter";
function Vehicles() {
    return (
        <div>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone ms-2">
                <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/zachary.png" />
                <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/brandon.png" />
                <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/spencer.png" />

            </div>
            <div className="row Vehiclecardtwo ms-2">
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/josh.png" />
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/alec.png" />
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/adrian.png" />
                <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/aaron.png" />

            </div>
            <div className="showmorebutton">
                <Button className="btn btn-light btn-lg" name="Show More" type="submit" id="showmore" />
            </div>
        </div>
    )
}

export default Vehicles; 