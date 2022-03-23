import React from "react";

function Contact() {
    return (
        <>
            <h3 className="mt-5 ms-5 text-start">Conatct Us</h3>
            <form className="mt-5 ms-5 me-5">
                <div className="row">
                    <div className="form-group col-lg-6 col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group col-lg-6 col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your e-mail id" />
                    </div>
                </div>
                <div className="form-group row">
                   <div className="col-lg-6">
                        <label htmlFor="inputMobile">Mobile No.</label>
                    <input type="text" className="form-control" id="inputMobile" placeholder="Enter Your Mobile Number" />
                </div>
                
                <div className="col-lg-6">
                        <label htmlFor="inputAltMobile">Alt. Mobile No.</label>
                    <input type="text" className="form-control" id="inputAltMobile" placeholder="" />
                </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4 col-lg-4">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4 col-lg-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4 col-lg-4">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>

        </>
    )
}

export default Contact;