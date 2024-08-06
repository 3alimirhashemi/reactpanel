import React, {useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter } from "react-router-dom";


const App = ()=>{
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter>
    <div className="App">
    	<div class="wrapper d-flex align-items-stretch">
      
          <MainContext.Provider value={{showMenu, setShowMenu}}>
            
                <Sidebar />
                <Content />

          </MainContext.Provider>
        
		  </div> 
    </div>
    </BrowserRouter>
  );
}

export default App;
