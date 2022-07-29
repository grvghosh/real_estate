import React, { useState } from "react";
import "./LocationInfo.css";
import SideBar from "./common/SideBar";
import NavLocationInfo from "./common/NavLocationInfo"
function LocationInfo() {

    return (
        <div className="basic">
      <SideBar />
      <div className="headform">
        {/* <Header user={user} /> */}
        <div className="rectangle"></div>

        <NavLocationInfo />
        <div className="main">
          {/* <form action="" className="form-basic" onSubmit={handleSubmit}> */}
          <form action="" className="form-basic">
            <div className="form-data1">
              <div className="form-container">
                <h4>Email</h4>
                <input type="text" placeholder="Email" className="input" />
                <h4>Area</h4>
                <select className="input" placeholder="select Area">
                  <option>Nagpur</option>
                  <option>Kanpur</option>
                  <option>Sri Ganganagar</option>
                </select>
                <h4>Address</h4>
                <input type="text" placeholder="Address" className="input" />
                <h4>Latitude</h4>
                <input type="text" placeholder="Latitude" className="input" />
              </div>

              <div className="form-container1">
                <h4>City</h4>
                <select className="input" placeholder="select City">
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>New Delhi</option>
                </select>
                <h4>Pincode</h4>
                <select className="input" placeholder="please select pincode">
                  <option>800023</option>
                  <option>560035</option>
                  <option>560078</option>
                </select>
                <h4>Landmark</h4>
                <input type="text" placeholder="Landmark" className="input" />
                <h4>Longitude</h4>
                <input type="text" placeholder="Longitude" className="input" />
              </div>
            </div>

            <div className="button">
              {/* <Link to="/General"> */}
                <button className="btn1 ">Previous</button>
              {/* </Link> */}
              <button className="btn2">Add property</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
    
}

export default LocationInfo;