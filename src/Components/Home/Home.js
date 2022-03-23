import React from "react";
import HomeCard from "./HomeCard";
import Button from "../Button/Button"


function Home() {
    return (
        <div className="container-fluid" id="home">
            <div className="row">
                <div className="col-lg-6">
                    <img src={process.env.PUBLIC_URL + '/images/carbg.png'} alt="loading" className="homeimg" />
                </div>
                <div className="col-lg-6 container-fluid homeheadings">
                    <h1>Want a car on rent?</h1>
                    <h3>Book it here</h3>
                    <hr/>
                    <div className="col-lg-12 custom-btn">
                       
                       <Button className="btn btn-md btn-light ms-2"  divclassname="homebutton" name="Our Services" />
                       <Button className="btn btn-md btn-danger ms-2" name="Make a booking" divclassname="homebutton" />
                    </div>
                </div>
            </div>
            <div className="row homecardrow">
            <HomeCard title="Safe Rides" imgurl="/images/saferides.png"/>
            <HomeCard title="Tested Vehicles" imgurl="/images/car-test.png"/>
            <HomeCard title="On Time Delivery" imgurl="/images/taxi-time.png"/>
            </div>
        </div>)
}
export default Home;