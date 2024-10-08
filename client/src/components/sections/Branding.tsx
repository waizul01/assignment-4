import { CarouselPlugin } from "../ImageSlider";
import { Button } from "../ui/button";

const Branding = () => {
  return (
    <div className="relative">
      <CarouselPlugin />
      <div className="absolute top-64 left-36 flex flex-col gap-7">
        <p className="text-4xl font-bold text-white uppercase">Exclusive Offer</p>
        <h1 className="text-6xl font-bold text-white uppercase">We protect your <br /> investment</h1>
        <Button className="bg-gray-500 hover:bg-gray-700 px-20 py-7 text-2xl uppercase">BOOK NOW</Button>
      </div>
    </div>
  );
};

export default Branding;
