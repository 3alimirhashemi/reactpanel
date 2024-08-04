import Sidebar from "./Sidebar";
import Content from "./Content";

const App = ()=>{
  return (
    <div className="App">
    	<div class="wrapper d-flex align-items-stretch">
			<Sidebar />
			<Content />
		</div> 
    </div>
  );
}

export default App;
