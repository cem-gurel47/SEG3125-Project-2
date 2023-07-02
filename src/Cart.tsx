const ITEMS_IN_CART = [
  {
    name: "Cyberpunk 2077",
    platform: "PC",
    genre: "Action",
    price: 59.99,
    condition: "New",
    availability: "In Stock",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <main className="px-8 py-12">
      <h2 className="font-bold text-lg mb-4">Cart</h2>
      <div className="flex border-b-2 border-black pb-8">
        {ITEMS_IN_CART.map((item) => (
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
              Remove from Cart
            </button>
          </a>
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-lg mb-4 mt-4">Payment</h2>
        <div className="flex flex-col justify-between border-b-2 pb-2">
          <p>
            Subtotal: <span className="font-bold text-black">59.99$</span>
          </p>

          <p>
            Shipping <span className="font-bold text-black">Free</span>
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p>
            Total <span className="font-bold text-black">59.99$</span>
          </p>

          <button className="bg-red-500 text-white rounded-full p-2 mt-2 font-bold">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
