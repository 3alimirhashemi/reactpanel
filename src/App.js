import Sidebar from "./Sidebar";
import Content from "./Content";
import { useState } from "react";
import { MainContext } from "./contexts/MainContext";

const App = ()=>{
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
    	<div class="wrapper d-flex align-items-stretch">
        <MainContext.Provider value={{showMenu, setShowMenu}}>
          <Sidebar />
          <Content />
        </MainContext.Provider>
		  </div> 
    </div>
  );
}

export default App;
