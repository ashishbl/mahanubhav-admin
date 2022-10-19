import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiGift,
  FiList,
  FiSettings,
  FiMusic,
  FiBookOpen,
} from "react-icons/fi";
import { RiWechatLine, RiAdvertisementLine } from "react-icons/ri";
import { BsCalendar2Month } from "react-icons/bs";
import { AiOutlineBell, AiOutlineUserAdd, AiOutlineLink } from "react-icons/ai";

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
export const sidebar = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/products",
    icon: FiShoppingBag,
    name: "Products",
  },
  {
    path: "/category",
    icon: FiList,
    name: "Category",
  },
  {
    path: "/customers",
    icon: FiUsers,
    name: "Customers",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
  // {
  //   path: "/coupons",
  //   icon: FiGift,
  //   name: "Coupons",
  // },
  // {
  //   path: "/our-staff",
  //   icon: FiUser,
  //   name: "Our Staff",
  // },
  {
    path: "/setting",
    icon: FiSettings,
    name: "Setting",
  },
  {
    path: "/monthchanges",
    icon: BsCalendar2Month,
    name: "महिन्याचा बदल",
  },
  {
    path: "/books",
    icon: FiBookOpen,
    name: "पुस्तके",
  },
  {
    path: "/bhajan",
    icon: FiMusic,
    name: "भजने",
  },
  {
    path: "/qanda",
    icon: RiWechatLine,
    name: "प्रश्न आणि उत्तरे",
  },
  {
    path: "/notification",
    icon: AiOutlineBell,
    name: "सूचना",
  },
  {
    path: "/advertisement",
    icon: RiAdvertisementLine,
    name: "जाहिरात",
  },
  {
    path: "/links",
    icon: AiOutlineLink,
    name: "लिंक",
  },
  {
    path: "/makeadmin",
    icon: AiOutlineUserAdd,
    name: "एडमिन बनवा",
  },
];

export const mahanubhavAdmin = [
  {
    path: "/books",
    icon: FiBookOpen,
    name: "पुस्तके",
  },
  {
    path: "/bhajan",
    icon: FiMusic,
    name: "भजने",
  },
  {
    path: "/qanda",
    icon: RiWechatLine,
    name: "प्रश्न आणि उत्तरे",
  },
  {
    path: "/notification",
    icon: AiOutlineBell,
    name: "सूचना",
  },
  {
    path: "/advertisement",
    icon: RiAdvertisementLine,
    name: "जाहिरात",
  },
  {
    path: "/links",
    icon: AiOutlineLink,
    name: "लिंक",
  },
];

export const ecommerceAdmin = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/products",
    icon: FiShoppingBag,
    name: "Products",
  },
  {
    path: "/category",
    icon: FiList,
    name: "Category",
  },
  {
    path: "/customers",
    icon: FiUsers,
    name: "Customers",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
];
