import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "./CardSlider";
import Button from "./button";
import FightImage from "../assets/FightImage.svg";
import Prevent from "../assets/Prevent.png";
import SectionTag from "./SectionTag";

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
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 md:mt-10">
      <Slider {...settings}>
       
        <CardSlider>
          <div className="flex flex-col-reverse lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
          
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 font-bold sm:mb-6 lg:mb-0">
              <SectionTag>Stop mPox Virus</SectionTag>
              <h3 className="text-[#59547d] text-2xl sm:text-3xl lg:text-4xl">
                How can we fight together against MonkeyPox virus?
              </h3>
              <p className="text-[#59547d] text-lg sm:text-xl font-medium">
                It’s never been clearer that we’re all global citizens, and we all
                have a part to play. The novel strain of monkeypox virus has
                officially reached pandemic proportions.
              </p>
              <Button>How to prevent</Button>
            </div>

        
            <div className="w-full lg:w-1/2">
              <img
                src={FightImage}
                className="h-auto mb-8 lg:mb-0 max-h-[350px] sm:max-h-[450px] lg:max-h-[550px] w-full object-contain"
                alt="Fight against MonkeyPox"
              />
            </div>
          </div>
        </CardSlider>

     
        <CardSlider>
          <div className="flex flex-col-reverse lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
           
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 font-bold sm:mb-6 lg:mb-0">
              <SectionTag>Stop mPox Virus</SectionTag>
              <h3 className="text-[#59547d] text-2xl sm:text-3xl lg:text-5xl">
                Keep you, your friends, and family safe
              </h3>
              <p className="text-[#59547d] text-lg sm:text-xl font-medium">
                It’s never been clearer that we’re all global citizens, and we all
                have a part to play. The novel strain of monkeypox virus has
                officially reached pandemic proportions.
              </p>
              <Button>How to prevent</Button>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={Prevent}
                className="h-auto mb-8 lg:mb-0 max-h-[350px] sm:max-h-[450px] lg:max-h-[550px] w-full object-cover"
                alt="Prevent MonkeyPox"
              />
            </div>
          </div>
        </CardSlider>
      </Slider>
    </div>
  );
}

export default HomeSlider;
