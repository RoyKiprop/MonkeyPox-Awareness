import image from "../assets/image.png";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={image} alt="Logo" className="h-10 sm:h-10 md:h-12" />
      <h2 className="font-bold text-xl md:text-2xl tracking-wide leading-tight text-shadow-lg">
        Mpox Virus
      </h2>
    </div>
  );
}

export default Logo;
