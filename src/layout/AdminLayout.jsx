import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../admin/assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "../admin/scss/App.scss";
import Dashboard from "../admin/pages/Dashboard";
import MainLayout from "../admin/layout/MainLayout";
import Login from "../admin/pages/Login";
import Advocates from "../admin/pages/Branches";
import CreateAdvocate from "../admin/pages/CreateBranch";
import EditAdvocate from "../admin/pages/EditBranch";
import AuthService from "../admin/services/AuthService";
import CreateBranch from "../admin/pages/CreateBranch";
import EditBranch from "../admin/pages/EditBranch";

const AdminLayout = () => {
  let user1 = localStorage.getItem("user");

  const checkTokenExpiration = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      const decodedToken = parseJwt(user.token);
      if (decodedToken.exp * 1000 < Date.now()) {
        try {
          // await AuthService.refreshToken();
          user1 = localStorage.getItem("user");
        } catch (error) {
          AuthService.logout();
        }
      }
    }
  };

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    if (user1) {
      const intervalId = setInterval(checkTokenExpiration, 1000 * 10);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <div className="admin-wrapper">
      <Router>
        <Routes>
          {user1 ? (
            <Route path="/admindfnd001907" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route
                path="/admindfnd001907/branches/create"
                element={<CreateBranch />}
              />
              <Route
                path="/admindfnd001907/branches/:id"
                element={<EditBranch />}
              />

              {/* <Route path="/admin/login" element={<Login />} /> */}
              <Route path="/admindfnd001907/branches" element={<Advocates />} />
            </Route>
          ) : (
            <Route path="/admindfnd001907" element={<Login />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default AdminLayout;
