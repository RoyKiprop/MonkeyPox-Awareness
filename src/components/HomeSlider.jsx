import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "./CardSlider";
import Button from "./button";
import FightImage from "../assets/FightImage.svg";
import Prevent from "../assets/Prevent.png";

function HomeSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mx-20 mt-10  ">
      <Slider {...settings}>
        <CardSlider>
          <div className="w-1/2  space-y-8 font-bold">
            <div className="p-1 rounded-xl bg-[#2dc6b3] w-[30%]">
              <h5 className="text-white text-center text-xl">
                Stop mPox Virus
              </h5>
            </div>
            <h3 className="text-[#59547d] text-4xl">
              How can we fight together against MonkeyPox virus?
            </h3>
            <p className="text-[#59547d] text-xl font-medium">
              It’s never been clearer that we’re all global citizens, and we all
              have a part to play. The novel strain of monkeypox virus has
              officially reached pandemic proportions.
            </p>
            <Button>How to prevent</Button>
          </div>
          <div className="w-1/2">
            <img
              src={FightImage}
              className="h-auto max-h-[550px] w-full object-contain"
            />
          </div>
        </CardSlider>

        <CardSlider>
          <div className="w-1/2 space-y-8 font-bold">
            <div className="p-1 rounded-xl bg-[#2dc6b3] w-[30%]">
              <h5 className="text-white text-center text-xl">
                Stop mPox Virus
              </h5>
            </div>
            <h3 className="text-[#59547d] text-5xl">
              Keep you, your friends, and family safe
            </h3>
            <p className="text-[#59547d] text-xl  font-medium">
              It’s never been clearer that we’re all global citizens, and we all
              have a part to play. The novel strain of monkeypox virus has
              officially reached pandemic proportions.
            </p>
            <Button>How to prevent</Button>
          </div>
          <div className="w-1/2">
            <img
              src={Prevent}
              className="h-auto max-h-[550px] w-full object-contain"
            />
          </div>
        </CardSlider>
      </Slider>
    </div>
  );
}

export default HomeSlider;
