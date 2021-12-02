import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MyProfilePage from "./pages/MyProfile";
import MyReservations from "./pages/MyReservations";
import MySpots from "./pages/MySpots";
import RegisterAccessSelectPage from "./pages/Register/AccessSelect";
import RegisterProfilePage from "./pages/Register/Profile";
import SpotDetailPage from "./pages/Spot/Detail";
import SpotRegisterPage from "./pages/Spot/Register";
import SpotsPage from "./pages/Spots";

const Router = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<HomePage />} path="/home" />
          </>
        )}
        <Route
          element={<RegisterAccessSelectPage />}
          path="/register/access-select"
        />
        <Route element={<RegisterProfilePage />} path="/register/profile" />

        {user && (
          <>
            <Route
              path="/"
              element={
                <Navigate
                  to={user?.type === "owner" ? "/my-spots" : "/spots"}
                  replace
                />
              }
            />
            {user?.type !== "owner" && (
              <Route element={<SpotsPage />} path="/spots" />
            )}
            <Route element={<SpotRegisterPage />} path="/spot/new" />
            <Route element={<SpotDetailPage />} path="/spot/:spotId" />
            <Route element={<MyProfilePage />} path="/me" />
            <Route element={<MyReservations />} path="/reservations" />
            {user?.type === "owner" && (
              <Route element={<MySpots />} path="/my-spots" />
            )}
          </>
        )}

        {!user && <Route path="*" element={<Navigate to="/home" replace />} />}
        {user && (
          <Route
            path="*"
            element={
              <Navigate
                to={user?.type === "owner" ? "/my-spots" : "/spots"}
                replace
              />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
