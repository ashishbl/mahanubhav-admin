import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { NavLink, Route } from "react-router-dom";
import { Button, WindmillContext } from "@windmill/react-ui";
import { IoLogOutOutline } from "react-icons/io5";
// import sidebar from "../../routes/sidebar";
import { sidebar, mahanubhavAdmin, ecommerceAdmin } from "../../routes/sidebar";
import { AdminContext } from "../../context/AdminContext";
import logoDark from "../../assets/img/logo/logo-dark.svg";
import logoLight from "../../assets/img/logo/logo-light.svg";
import MainLogo from "../../assets/img/mainLogo.png";

const SidebarContent = () => {
  const [perAdmin, setPerAdmin] = useState();
  const adminRole = useSelector((state) => state.userAuth);
  const { mode } = useContext(WindmillContext);
  const { dispatch } = useContext(AdminContext);

  const handleLogOut = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("adminInfo");
    window.location.reload();
  };

  useEffect(() => {
    if (adminRole === "Admin") {
      setPerAdmin(sidebar);
    } else if (adminRole === "ecommerce-admin") {
      setPerAdmin(ecommerceAdmin);
    } else if (adminRole === "mahanubhav-admin") {
      setPerAdmin(mahanubhavAdmin);
    }
  }, []);

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className=" text-gray-900 dark:text-gray-200" href="/dashboard">
        {mode === "dark" ? (
          // <img src={logoLight} alt="mahanubhav" width="135" className="pl-6" />
          <div className="dlogo">
            <img src={MainLogo} alt="mainlogo"></img>
            <span>Mahanubhav</span>
          </div>
        ) : (
          // <img src={logoDark} alt="mahanubhav" width="135" className="pl-6" />
          <div className="dlogo">
            <img src={MainLogo} alt="mainlogo"></img>
            <span>Mahanubhav</span>
          </div>
        )}
      </a>
      <ul className="mt-8">
        {perAdmin
          ? perAdmin.map((route) => (
              <li className="relative" key={route.name}>
                {route.path === "/monthchanges" && (
                  <div>
                    <hr />
                  </div>
                )}
                <NavLink
                  exact
                  to={route.path}
                  className="px-6 py-2 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200"
                  activeClassName="text-green-500 dark:text-gray-100"
                >
                  <Route path={route.path} exact={route.exact}>
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  </Route>
                  <route.icon className="w-5 h-5" aria-hidden="true" />
                  <span className="ml-4">{route.name}</span>
                </NavLink>
              </li>
            ))
          : "please wait..."}
      </ul>
      <span className="lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block">
        <Button onClick={handleLogOut} size="large" className="w-full">
          <span className="flex items-center">
            <IoLogOutOutline className="mr-3 text-lg" />
            <span className="text-sm">बाहेर पडा </span>
          </span>
        </Button>
      </span>
    </div>
  );
};

export default SidebarContent;
