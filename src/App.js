import React, { lazy, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMnthYr, newStateData } from "./redux/actions/actions";
import { ToastContainer } from "./utils/toast";
import PrivateRoute from "./components/login/PrivateRoute";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { WindmillContext } from "@windmill/react-ui";

const Layout = lazy(() => import("./layout/Layout.js"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgetPassword = lazy(() => import("./pages/ForgotPassword.js"));

const App = () => {
  const { mode, toggleMode } = useContext(WindmillContext);
  const myState = useSelector((state) => state.setDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myState?.month) {
      let d = new Date();
      dispatch(getMnthYr({ month: d.getMonth() + 1, year: d.getFullYear() }));
      dispatch(newStateData(200));
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgetPassword} />

          <PrivateRoute>
            {" "}
            <Route path="/" component={Layout} />
          </PrivateRoute>
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
