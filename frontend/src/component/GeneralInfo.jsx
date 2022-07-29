import React, { useState } from "react";
import "./general_info.css";
import SideBar from "./common/SideBar";
import NavBarGeneral from "./common/NavBarGeneral";
function GeneralInfo() {

    return (
        <div className="basic">
        <SideBar />
        <div className="headform">
          {/* <Header user={user} /> */}
          <div className="rectangle"></div>
          <NavBarGeneral />
          <div className="main">
            {/* <form action="" className="form-basic" onSubmit={handleSubmit}> */}
            <form action="" className="form-basic">
              <div className="form-data1">
                <div className="form-container">
                  <h4>Name</h4>
                  <select className="input" name="cars">
                    <option value="owner">owner</option>
                    <option value="saab">broker</option>
                  </select>
                  <h4>Posted by</h4>
                  <select className="input" name="cars">
                    <option value=""disabled selected hidden>posted by</option>
                    <option value="saab">broker</option>
                    <option value="saab">owner</option>
                  </select>
                  <h4>Featured package</h4>
                  <select
                    className="input"
                    name="cars"
                    placeholder="please select"
                  >
                    <option value="volvo">20L</option>
                    <option value="saab">35L</option>
                    <option value="fiat">67L</option>
                    <option value="audi">89L</option>
                  </select>
                </div>
  
                <div className="form-container1">
                  <h4>Mobile</h4>
                  <input
                    type="text"
                    id="contact"
                    required
                    // value={contact}
                    // onChange={(e) => setConact(e.target.value)}
                    placeholder="enter your mobile number"
                    className="input"
                  />
                  <h4>Sale type</h4>
                  <select
                    className="input"
                    name="cars"
                    placeholder="please select"
                  >
                    <option value="volvo">Installment</option>
                    <option value="saab">Emi</option>
                    <option value="fiat">single payment</option>
                  </select>
                  <h4>PPD package</h4>
                  <select
                    className="input"
                    name="cars"
                    placeholder="please enter"
                  >
                    {/* <option value="saab">3L</option>
                    <option value="fiat">4L</option>
                    <option value="fiat">5L</option> */}
                  </select>
                </div>
              </div>
  
              <div className="button">
                {/* <Link to="PropertyDetails"> */}
                  <button className="btn1 ">Previous</button>
                {/* </Link> */}
                <button className="btn2">Save & continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );

    
}

export default GeneralInfo;