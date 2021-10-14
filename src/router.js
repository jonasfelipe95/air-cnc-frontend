import React from "react";
import {
  BrowserRouter, Redirect, Route, Switch
} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MyProfilePage from "./pages/MyProfile";
import MyReservations from "./pages/MyReservations";
import MySpots from "./pages/MySpots";
import RegisterAccessSelectPage from "./pages/Register/AccessSelect";
import RegisterProfilePage from "./pages/Register/Profile";
import SpotDetailPage from "./pages/Spot/Detail";
import SpotRegisterPage from "./pages/Spot/Register";


const router = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route component={HomePage} path="/home" />
          <Route
            component={RegisterAccessSelectPage}
            path="/register/access-select"
          />
          <Route component={RegisterProfilePage} path="/register/profile" />

          <Route component={SpotRegisterPage} path="/spot/new" />
          <Route component={SpotDetailPage} path="/spot/:spotId" />

          <Route component={LoginPage} path="/login" />

          <Route component={MyProfilePage} path="/me" />

          <Route component={MyReservations} path="/reservations" />

          <Route component={MySpots} path="/my-spots" />


          <Redirect path="*" to="/home" />
        </Switch>
    </BrowserRouter>
  );
};

export default router;
