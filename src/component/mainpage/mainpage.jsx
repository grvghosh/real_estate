import "./mainpage.css"

const Mainpage =()=>{

    const sampledata =[
        {PPDID:"55887",
        image:"h",
        property:"PLOT",
        contact:"9111823829",
        area:"1200",
        views:"05",
        status:"sold",
        daysleft:"35",
        action:""
    },{
        PPDID:"55878",
        image:"h",
        property:"House",
        contact:"9111823829",
        area:"1500",
        views:"35",
        status:"sold",
        daysleft:"05",
        action:"",
    }

    ]

    

    return(
        <html>
      <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
    <body>
      <div className="main1" id="searchsection">
      <div className="uppermain">
      <input id="searchbar" type="text" placeholder="  Search PPD ID" name="search"></input>
      <button className="searchbutton" type="submit"><i class="fa fa-search"></i></button>
      </div>
      <div className="uppermain">
        <button id="addbutton">+Add Property</button>
      </div>
      </div>
      <br></br>
      <nav id="navbar">
        <ul>
            <li>PPD ID</li>
            <li>Image</li>
            <li>Property</li>
            <li>Contact</li>
            <li>Area</li>
            <li>View</li>
            <li>Status</li>
            <li>Days left</li>
            <li>Action</li>
        </ul>
      </nav>
    
      <div>
      {sampledata.map((ele)=>{
          return(
            <ul>
            <div className="datadisplay"><li>{ele.PPDID}</li></div>
            <div className="datadisplay" id="imagedis"><li>{ele.image}</li></div>
            <div className="datadisplay" id="propertydis"><li>{ele.property}</li></div>
            <div className="datadisplay" id="contactdisplay"><li>{ele.contact}</li></div>
            <div className="datadisplay"><li>{ele.area}</li></div>
            <div className="datadisplay"><li>{ele.views}</li></div>
            <div className="datadisplay" id="statusdis"><li>{ele.status}</li></div>
            <div className="datadisplay"><li>{ele.daysleft}</li></div>
            <div className="datadisplay"><li>{ele.action}</li></div>

        </ul>
          )
        })}

      </div>
    </body>
    </html>
    );
}

export default Mainpage;