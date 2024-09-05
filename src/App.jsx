import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Symptoms from "./components/Symptoms";
import Prevention from "./components/prevention";


function App() {
  return (
    <BrowserRouter>
     <Home/>
     <About/>
     <Symptoms/>
     <Prevention/>
    </BrowserRouter>
  );
}

export default App;
