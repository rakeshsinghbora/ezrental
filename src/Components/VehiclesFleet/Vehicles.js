import React from "react";
import Button from "../Button/Button";
import VehicleCard from "./VehicleCard"

function Vehicles() {
    return (
        <div id="vehicles">
            <h5>only the best cars</h5>
            <h1>Our Vehicle Fleet</h1>
            <p>We provide our customers with the most incredible driving emotion.</p>
            <p>That's why we have only world class car in our fleet.</p>
            <div className="row mt-5 vehicles-row">
                    <Button name="super car" className="btn btn-md btn-light vehicles-btn" divclassname="col-lg-2 col-md-3"/>
                    <Button name="suv" className="btn btn-md btn-dark vehicles-btn" divclassname="col-lg-2 col-md-3"/>
                    <Button name="luxury" className="btn btn-md btn-light vehicles-btn" divclassname="col-lg-2 col-md-3"/>
                    <Button name="sports car" className="btn btn-md btn-dark vehicles-btn" divclassname="col-lg-2 col-md-3"/>
                    <Button name="premium" className="btn btn-md btn-light vehicles-btn" divclassname="col-lg-2 col-md-3"/>
                    <Button name="hyper car" className="btn btn-md btn-dark vehicles-btn" divclassname="col-lg-2 col-md-3"/>
            </div>
   
          <div className="row Vehiclecardone">
               <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/zachary.png"/>
               <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/brandon.png"/>
               <VehicleCard className="col-lg-4" imgClassName="carCardOne" url="/images/spencer.png"/>
               
          </div>
          <div className="row Vehiclecardtwo">
          <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/josh.png"/>
          <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/alec.png"/>
          <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/adrian.png"/>
          <VehicleCard className="col-lg-3 col-md-6" imgClassName="carCardTwo" url="/images/aaron.png"/>
      
          </div>
          <Button className="btn btn-light btn-lg" name="Show More" type="submit" id="showmore"/>

        </div>
    )
}

export default Vehicles; 