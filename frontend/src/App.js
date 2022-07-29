
import './App.css';
import BasicInfo from "./component/BasicInfo"
import PropDetail from "./component/PropDetail"
import GeneralInfo from './component/GeneralInfo';
import LocationInfo from './component/LocationInfo';
import SideBar from './component/common/SideBar';
import Navbar from './component/common/NavBar';
function App() {
  return (
    <div className="App">
      {/* <BasicInfo/> */}
      <PropDetail/>
      {/* <GeneralInfo/> */}
      {/* <LocationInfo/> */}
      {/* <SideBar/> */}
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
