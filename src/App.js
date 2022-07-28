import Sidebar from './component/sidebar/sidebar';
import './App.css';
import Header from './component/header/header';
import Mainpage from './component/mainpage/mainpage';



function App() {
  return (
    <>
    <div>
    <div id="mainpage2"><Sidebar/></div>
    <div id="mainpage1"><Header/></div>
    <hr></hr>
    <div id = "mainpage-3"><Mainpage/> </div>
    
    </div>

    </>
  );
}

export default App;
