import StoreLocatorIcon from "../assets/storeLocator.svg";
import CustomerServiceIcon from "../assets/customerService.svg";
import CartIcon from "../assets/cart.svg";
import AccountIcon from "../assets/account.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const MENU_LINKS = [
  {
    link: "/store-locator",
    text: "header.store",
    icon: StoreLocatorIcon,
  },
  {
    link: "/customer-service",
    text: "header.customer",
    icon: CustomerServiceIcon,
  },
  {
    link: "/cart",
    text: "header.cart",
    icon: CartIcon,
  },
  {
    link: "/account",
    text: "header.account",
    icon: AccountIcon,
  },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="w-full px-8 py-4 flex justify-between items-center">
      <div className="flex items-center w-[70%]">
        <a href="/">
          <h1 className=" font-extrabold text-4xl">
            Game<span className="text-red-500">Nest</span>
          </h1>
        </a>
        <input
          placeholder={t("header.search")}
          className="ml-12 w-full rounded-lg bg-transparent border border-gray-400 px-4 py-2"
        />
      </div>
      <Select
        onValueChange={(value) => {
          i18n.changeLanguage(value);
        }}
      >
        <SelectTrigger className="w-[180px] border-gray-400 ml-2">
          <SelectValue placeholder={t("header.placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Francais</SelectItem>
        </SelectContent>
      </Select>

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
  const { t } = useTranslation();
  return (
    <a
      href={link}
      className="flex flex-col items-center justify-center w-12 h-12 text-center text-sm ml-14 hover:text-red-500"
    >
      <img src={icon} className="w-8 h-8" />
      <p className="text-xs w-max">{t(text)}</p>
    </a>
  );
};
export default Header;
