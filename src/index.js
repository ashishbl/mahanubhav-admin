import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Windmill } from "@windmill/react-ui";
import "./assets/css/custom.css";
import "./assets/css/tailwind.css";
import "./assets/css/tailwind.output.css";
import "@pathofdev/react-tag-input/build/index.css";
import App from "./App";
import myTheme from "./assets/theme/myTheme";
import * as serviceWorker from "./serviceWorker";
import { AdminProvider } from "./context/AdminContext";
import { SidebarProvider } from "./context/SidebarContext";
import ThemeSuspense from "./components/theme/ThemeSuspense";
import { PersistGate } from "redux-persist/integration/react";
import { persiStore } from "./redux/store/store";
import { Provider } from "react-redux";
import store from "./redux/store/store";

// if (process.env.NODE_ENV !== "production") {
//   const axe = require("react-axe");
//   axe(React, ReactDOM, 1000);
// }

ReactDOM.render(
  <AdminProvider>
    <SidebarProvider>
      <Suspense fallback={<ThemeSuspense />}>
        <Windmill usePreferences theme={myTheme}>
          <Provider store={store}>
            <PersistGate persistor={persiStore}>
              <App />
            </PersistGate>
          </Provider>
        </Windmill>
      </Suspense>
    </SidebarProvider>
  </AdminProvider>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
