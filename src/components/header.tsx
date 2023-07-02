import StoreLocatorIcon from "../assets/storeLocator.svg";
import CustomerServiceIcon from "../assets/customerService.svg";
import CartIcon from "../assets/cart.svg";
import AccountIcon from "../assets/account.svg";

const MENU_LINKS = [
  {
    link: "/store-locator",
    text: "Store Locator",
    icon: StoreLocatorIcon,
  },
  {
    link: "/customer-service",
    text: "Customer Service",
    icon: CustomerServiceIcon,
  },
  {
    link: "/cart",
    text: "Cart",
    icon: CartIcon,
  },
  {
    link: "/account",
    text: "Account",
    icon: AccountIcon,
  },
];

const Header = () => {
  return (
    <header className="w-full px-8 py-4 flex justify-between items-center">
      <div className="flex items-center w-[70%]">
        <a href="/">
          <h1 className=" font-extrabold text-4xl">
            Game<span className="text-red-500">Nest</span>
          </h1>
        </a>
        <input
          placeholder="What are you looking for?"
          className="ml-12 w-full rounded-lg bg-transparent border border-gray-400 px-4 py-2"
        />
      </div>
      <div className="flex items-center w-[30%] justify-between">
        {MENU_LINKS.map((link) => (
          <HeaderMenuLink key={link.link} {...link} />
        ))}
      </div>
    </header>
  );
};

const HeaderMenuLink = ({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: string;
}) => {
  return (
    <a
      href={link}
      className="flex flex-col items-center justify-center w-12 h-12 text-center text-sm ml-14 hover:text-red-500"
    >
      <img src={icon} className="w-8 h-8" />
      <p className="text-xs w-max">{text}</p>
    </a>
  );
};
export default Header;
