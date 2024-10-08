import { BrowserRouter } from "react-router-dom";
import BgImage from "/src/assets/BgImage.png";
import Home from "./components/Home";
import About from "./components/About";
import Symptoms from "./components/Symptoms";
import Prevention from "./components/prevention";
import Footer from "./components/Footer";
import WashHands from "./components/WashHands";

function App() {
  return (
    <BrowserRouter>
      <div   style={{
        backgroundImage: `url(${BgImage})`,
        backgroundColor: "rgba(235, 235, 243, 0.75)",
        backgroundBlendMode: "overlay" 
      }}>
        <Home />
        <About />
        <Symptoms />
        <Prevention />
        <WashHands/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
