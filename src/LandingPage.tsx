import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImage from "./assets/carousel-1.svg";
import CollectiblesImage from "./assets/featureblock_collectibles.png";
import PCImage from "./assets/featureblock_pc.png";
import PS5Image from "./assets/featureblock_ps5.png";
import XboxImage from "./assets/featureblock_xboxseriesx.png";
import SwitchImage from "./assets/featureblock_switch.png";

const FEATURE_BLOCKS = [
  {
    image: CollectiblesImage,
    title: "Collectibles",
    link: "/collectibles",
  },
  {
    image: PCImage,
    title: "PC",
    link: "/pc",
  },
  {
    image: PS5Image,
    title: "PS5",
    link: "/ps5",
  },
  {
    image: XboxImage,
    title: "Xbox Series X",
    link: "/xbox-series-x",
  },
  {
    image: SwitchImage,
    title: "Switch",
    link: "/switch",
  },
];

function App() {
  return (
    <div className="min-h-screen">
      <Carousel>
        <div className="relative">
          <img src={CarouselImage} />
          <h2 className="absolute top-20 left-11 text-white font-extrabold text-xl">
            Special Discounts
          </h2>
          <p className="absolute top-28 left-11 text-white">
            Check out special discounts for the Father’s Day
          </p>

          <a href="/shop">
            <button className="absolute bottom-36 left-11 bg-red-700 text-white font-bold px-4 py-2 rounded-full">
              SHOP NOW
            </button>
          </a>
        </div>
        <div className="relative">
          <img src={CarouselImage} />
          <h2 className="absolute top-20 left-11 text-white font-extrabold text-xl">
            Special Discounts 2
          </h2>
          <p className="absolute top-28 left-11 text-white">
            Check out special discounts for the Father’s Day 2
          </p>

          <a href="/shop">
            <button className="absolute bottom-36 left-11 bg-red-700 text-white font-bold px-4 py-2 rounded-full">
              SHOP NOW
            </button>
          </a>
        </div>
      </Carousel>
      <div className="flex w-full justify-between items-center mt-4 mb-12 ">
        {FEATURE_BLOCKS.map((block) => (
          <a
            className="flex flex-col items-center justify-center w-1/5 hover:text-red-700"
            href="/shop"
          >
            <img src={block.image} className="rounded-2xl" />
            <p className="text-center mt-4">{block.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
