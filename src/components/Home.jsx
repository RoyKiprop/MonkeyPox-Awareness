import BgImage from "../assets/BgImage.png";
import Header from "./header";
import HomeSlider from "./HomeSlider";

function Home() {
  return (
    <section
      className="h-screen"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundColor: "rgba(235, 235, 243, 0.75)",
        backgroundBlendMode: "overlay" 
      }}
    >
      <Header />
      <HomeSlider />
    </section>
  );
}

export default Home;

