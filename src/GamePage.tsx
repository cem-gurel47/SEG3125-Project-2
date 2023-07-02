import CheckIcon from "./assets/deliveryAvailable.png";

const GAME_INFO = {
  name: "Cyberpunk 2077",
  platform: "PC",
  genre: "Action",
  price: 59.99,
  condition: "New",
  availability: "In Stock",
  image:
    "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
};

const GamePage = () => {
  return (
    <main>
      <div className="flex w-full items-center border-b-2 border-b-black p-8">
        <div className="flex flex-col text-gray-500 mr-8">
          <h1>CyberPunk 2077</h1>
          <p>Made by CD Projekt</p>
        </div>
        <h2 className="text-black text-2xl">PC</h2>
      </div>
      <div className="p-8 flex justify-between">
        <div className="flex">
          <div className="flex flex-col  max-w-xs">
            <img src={GAME_INFO.image} alt="game-img" />
            <button className="bg-red-700 text-white font-bold px-4 py-2 mt-4 rounded-full w-full">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col ml-8 justify-between pb-14">
            <div>
              <h2 className="font-bold text-2xl mb-2">${GAME_INFO.price}</h2>
              <div className="flex items-center gap-4">
                <img src={CheckIcon} alt="check-icon" className="w-5 h-5" />
                Home Delivery
              </div>
              <div className="flex items-center gap-4">
                <img src={CheckIcon} alt="check-icon" className="w-5 h-5" />
                Collect In Store
              </div>
            </div>
            <div>
              <p className="text-gray-500">
                Condition:{" "}
                <span className="font-bold text-black">
                  {GAME_INFO.condition}
                </span>
              </p>
              <p className="text-gray-500">
                Availability:{" "}
                <span className="font-bold text-black">
                  {GAME_INFO.availability}
                </span>
              </p>
              <p className="text-gray-500">
                Genre:{" "}
                <span className="font-bold text-black">{GAME_INFO.genre}</span>
              </p>
              <p className="text-gray-500">
                Platform:{" "}
                <span className="font-bold text-black">
                  {GAME_INFO.platform}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-8">
          <h2 className="font-bold">Similar Games</h2>
          <div className="grid grid-cols-2 mt-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                className="flex flex-col items-center w-32 h-32 mr-2 mb-4 cursor-pointer"
                key={i}
              >
                <img src={GAME_INFO.image} alt="game-img" />
                <p className="text-center mt-2">Cyberpunk 2077</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col px-8">
        <h2 className="font-bold text-2xl mb-2">Reviews</h2>
        <div className="flex flex-col px-8 py-2 border-2 rounded-lg">
          <div className="flex items-center mt-4">
            <img
              src={GAME_INFO.image}
              alt="game-img"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-bold">John Doe</h3>
              <p className="text-gray-500">5/5</p>
            </div>
          </div>

          <p className="mt-4">Lorem ipsum dolo</p>
        </div>
      </div>
    </main>
  );
};

export default GamePage;
