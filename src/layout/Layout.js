import React, { useContext, Suspense, useEffect, lazy, useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Main from "./Main";
import { routes, mahanubhavAdmin, ecommerceAdmin } from "../routes";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarContext } from "../context/SidebarContext";
import ThemeSuspense from "../components/theme/ThemeSuspense";
import { useSelector } from "react-redux";

const Page404 = lazy(() => import("../pages/404"));

const Layout = () => {
  const [perAdmin, setPerAdmin] = useState();
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();
  const adminRole = useSelector((state) => state.userAuth);
  console.log(adminRole);
  useEffect(() => {
    closeSidebar();
    if (adminRole === "Admin") {
      setPerAdmin(routes);
    } else if (adminRole === "ecommerce-admin") {
      setPerAdmin(ecommerceAdmin);
    } else if (adminRole === "mahanubhav-admin") {
      setPerAdmin(mahanubhavAdmin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, adminRole]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemeSuspense />}>
            <Switch>
              {perAdmin
                ? perAdmin.map((route, i) => {
                    return route.component ? (
                      <Route
                        key={i}
                        exact={true}
                        path={`${route.path}`}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null;
                  })
                : "please wait..."}
              {adminRole === "Admin" ? (
                <Redirect exact from="/" to="/dashboard" />
              ) : adminRole === "mahanubhav-admin" ? (
                <Redirect exact from="/" to="/books" />
              ) : adminRole === "ecommerce-admin" ? (
                <Redirect exact from="/" to="/dashboard" />
              ) : (
                "please wait..."
              )}
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

export default Layout;
