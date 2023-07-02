import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "./components/ui/checkbox";
import { useState } from "react";

const PLATFORMS = ["PC", "PS5", "Xbox", "Switch"];

const GENRES = ["Action", "Adventure", "RPG"];

const CONDITIONS = ["New", "Used"];

const AVAILABILITY = ["In Stock", "Out of Stock"];

const ITEMS = [
  ...Array(10).fill({
    name: "Cyberpunk 2077",
    platform: "PC",
    genre: "Action",
    price: 59.99,
    condition: "New",
    availability: "In Stock",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
  }),
];

const SORT_BY = [
  "Price",
  "Name",
  "Platform",
  "Genre",
  "Condition",
  "Availability",
];

const Shop = () => {
  return (
    <main className="grid grid-cols-8 px-8">
      <div className="col-span-1">
        <h2 className="font-bold text-lg border-b-2">Filters</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="sort">
            <AccordionTrigger>Sort By</AccordionTrigger>
            {SORT_BY.map((sort) => (
              <AccordionItemContent title={sort} key={sort} />
            ))}
          </AccordionItem>
          <AccordionItem value="platform">
            <AccordionTrigger>Platform</AccordionTrigger>
            {PLATFORMS.map((platform) => (
              <AccordionItemContent title={platform} key={platform} />
            ))}
          </AccordionItem>
          <AccordionItem value="genre">
            <AccordionTrigger>Genre</AccordionTrigger>
            {GENRES.map((genre) => (
              <AccordionItemContent title={genre} key={genre} />
            ))}
          </AccordionItem>
          <AccordionItem value="genre">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="min" className="border p-1" type="number" />
                <input placeholder="max" className="border p-1" type="number" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="condition">
            <AccordionTrigger>Condition</AccordionTrigger>
            {CONDITIONS.map((condition) => (
              <AccordionItemContent title={condition} key={condition} />
            ))}
          </AccordionItem>
          <AccordionItem value="availability">
            <AccordionTrigger>Availability</AccordionTrigger>
            {AVAILABILITY.map((availability) => (
              <AccordionItemContent title={availability} key={availability} />
            ))}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="col-span-7 grid grid-cols-4 px-12 py-6">
        {ITEMS.map((item) => (
          <a
            className="flex flex-col col-span-1 border-2 p-2 rounded-lg mb-12 mr-4"
            href="/game"
          >
            <img src={item.image} className="w-full h-full" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.price}$</p>
              </div>
              <div className="flex justify-between">
                <p>{item.platform}</p>
                <p>{item.availability}</p>
              </div>
            </div>
            <button className="bg-red-500 text-white rounded-full p-2 mt-2 font-bold">
              Add to Cart
            </button>
          </a>
        ))}
      </div>
    </main>
  );
};

const AccordionItemContent = ({ title }: { title: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <AccordionContent>
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <Checkbox checked={checked} /> {title}
      </div>
    </AccordionContent>
  );
};

export default Shop;
