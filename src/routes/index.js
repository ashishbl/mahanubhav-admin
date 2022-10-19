import { lazy } from "react";
import { useSelector } from "react-redux";

// use lazy for better code splitting
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Category = lazy(() => import("../pages/Category"));
const Staff = lazy(() => import("../pages/Staff"));
const Customers = lazy(() => import("../pages/Customers"));
const CustomerOrder = lazy(() => import("../pages/CustomerOrder"));
const Orders = lazy(() => import("../pages/Orders"));
const OrderInvoice = lazy(() => import("../pages/OrderInvoice"));
const Coupons = lazy(() => import("../pages/Coupons"));
// const Setting = lazy(() => import("../pages/Setting"));
const Page404 = lazy(() => import("../pages/404"));
const EditProfile = lazy(() => import("../pages/EditProfile"));

const Books = lazy(() => import("../pages/Books"));
const Bhajan = lazy(() => import("../pages/Bhajan"));
const Qanda = lazy(() => import("../pages/Qanda"));
const Monthchange = lazy(() => import("../pages/Monthchange"));
const Notification = lazy(() => import("../pages/Notification"));
const Advertisement = lazy(() => import("../pages/Advertisement"));
const Makeadmin = lazy(() => import("../pages/Makeadmin"));
const Links = lazy(() => import("../pages/Links"));
/*
//  * ⚠ These are internal routes!
//  * They will be rendered inside the app, using the default `containers/Layout`.
//  * If you want to add a route to, let's say, a landing page, you should add
//  * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
//  * are routed.
//  *
//  * If you're looking for the links rendered in the SidebarContent, go to
//  * `routes/sidebar.js`
 */

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    component: Products,
  },

  {
    path: "/category",
    component: Category,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/customer-order/:id",
    component: CustomerOrder,
  },
  {
    path: "/our-staff",
    component: Staff,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/order/:id",
    component: OrderInvoice,
  },
  {
    path: "/coupons",
    component: Coupons,
  },
  { path: "/setting", component: EditProfile },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/bhajan",
    component: Bhajan,
  },
  {
    path: "/qanda",
    component: Qanda,
  },
  {
    path: "/monthchanges",
    component: Monthchange,
  },
  {
    path: "/notification",
    component: Notification,
  },
  {
    path: "/advertisement",
    component: Advertisement,
  },
  {
    path: "/makeadmin",
    component: Makeadmin,
  },
  {
    path: "/links",
    component: Links,
  },
];

export const mahanubhavAdmin = [
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/bhajan",
    component: Bhajan,
  },
  {
    path: "/qanda",
    component: Qanda,
  },
  {
    path: "/monthchanges",
    component: Monthchange,
  },
  {
    path: "/notification",
    component: Notification,
  },
  {
    path: "/advertisement",
    component: Advertisement,
  },
  {
    path: "/links",
    component: Links,
  },
];

export const ecommerceAdmin = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    component: Products,
  },

  {
    path: "/category",
    component: Category,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/customer-order/:id",
    component: CustomerOrder,
  },
  {
    path: "/our-staff",
    component: Staff,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/order/:id",
    component: OrderInvoice,
  },
  {
    path: "/coupons",
    component: Coupons,
  },
  { path: "/setting", component: EditProfile },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
];
