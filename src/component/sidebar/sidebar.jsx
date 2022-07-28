import "./sidebar.css"

const Sidebar=()=>{

    return(
        <>
        <div id="sidebar">
            <div id="logo">
                <h1> LOGO </h1>
            </div>
            <div>
                <ul>
                    <li>
                        <img></img>
                        <h4 id="propertyh4"> Property</h4>
                    </li>
                    <li>
                        <img></img>
                        <h4> Assistance</h4>
                    </li>
                    <li>
                    <img></img>
                        <h4> Recieved Interest</h4>
                    </li>
                    <li>
                    <img></img>
                        <h4> Sent Interest</h4>
                    </li>
                    <li>
                    <img></img>
                        <h4> Property view</h4>
                    </li>
                    <li>
                    <img></img>
                        <h4> Tarrif Plan</h4>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar;