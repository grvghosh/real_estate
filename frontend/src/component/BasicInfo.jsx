import React, { useState } from "react";
import "./basic_info.css";
import SideBar from "./common/SideBar";
function BasicInfo() {


  return (
    <div className="basic">
      <SideBar/>
        <div className="main">
          <form action="" className="form-basic"> 
          {/* onSubmit={handleSubmit} */}
            <div className="form-data1">
              <div className="form-container">
                <h4>Property type</h4>

                <select
                  // className="input"
                  // name="cars"
                  // id="Type"
                  // required
                  // value={Type}
                  // onChange={(e) => setType(e.target.value)}
                >
                  <option value=""disabled selected hidden>Select Property type</option>
                  <option value="Flat">Flat</option>
                  <option value="House">House</option>
                  <option value="Plot">Plot</option>
                </select>
                {/* <input
                  type="text"
                  id="name"
                  placeholder="select propery type"
                  className="input"
                /> */}

                <h4>Price</h4>
                <input
                  type="text"
                  id="Price"
                  // value={Price}
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="name"
                  className="input"
                />
                <h4>Property age</h4>
                <input
                  type="text"
                  id="age"
                  placeholder="name"
                  className="input"
                />
                <h4>Property Description</h4>
                <input
                  type="text"
                  id="desc"
                  placeholder="name"
                  className="input"
                />
              </div>

              <div className="form-container1">
                <h4>Negotiable</h4>
                <input
                  type="text"
                  id="nego"
                  placeholder="name"
                  className="input"
                />
                <h4>Ownership</h4>
                <input
                  type="text"
                  id="own"
                  placeholder="name"
                  className="input"
                />
                <h4>Property Approved</h4>
                <input
                  type="text"
                  id="approv"
                  placeholder="name"
                  className="input"
                />
                <h4>Bank Loan</h4>
                <input
                  type="text"
                  id="loan"
                  // value={loan}
                  // onChange={(e) => setLoan(e.target.value)}
                  placeholder="name"
                  className="input"
                />
              </div>
            </div>
            <div className="button">
              
                <button
                  className="btn1"
                  style={{ borderRadius: "40px", width: "7vw" }}
                >
                  Cancel
                </button>
              
              <button
                className="btn2"
                style={{ borderRadius: "40px", width: "8vw" }}
              >
                Save & continue
              </button>
            </div>
          </form>
        </div>
      </div>
    
  );

}
export default BasicInfo;
