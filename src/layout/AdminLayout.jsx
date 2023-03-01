import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../admin/assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "../admin/scss/App.scss";
import Dashboard from "../admin/pages/Dashboard";
import MainLayout from "../admin/layout/MainLayout";
import Login from "../admin/pages/Login";
import Settings from "../admin/pages/Settings";
import Services from "../admin/pages/Services";
import ServiceDetails from "../admin/pages/ServiceDetails";
import CreateService from "../admin/pages/CreateService";
import Advocates from "../admin/pages/Advocates";
import CreateAdvocate from "../admin/pages/CreateAdvocate";
import EditAdvocate from "../admin/pages/EditAdvocate";
import AuthService from "../admin/services/AuthService";
import Blogs from "../admin/pages/Blogs";
import CreateBlog from "../admin/pages/CreateBlog";
import EditBlog from "../admin/pages/EditBlog";
import Slides from "../admin/pages/Slides";
import CreateSlide from "../admin/pages/CreateSlide";
import EditSlide from "../admin/pages/EditSlide";
import CreateSetting from "../admin/pages/CreateSetting";
import SettingDetails from "../admin/pages/SettingDetails";

const AdminLayout = () => {
  let user1 = localStorage.getItem("user");

  const checkTokenExpiration = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      const decodedToken = parseJwt(user.accessToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        try {
          await AuthService.refreshToken();
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
              <Route path="/admindfnd001907/services" element={<Services />} />
              <Route path="/admindfnd001907/blogs" element={<Blogs />} />
              <Route
                path="/admindfnd001907/blogs/create"
                element={<CreateBlog />}
              />
              <Route
                path="/admindfnd001907/services/:id"
                element={<ServiceDetails />}
              />
              <Route
                path="/admindfnd001907/setting/:id"
                element={<SettingDetails />}
              />
              <Route
                path="/admindfnd001907/service/create"
                element={<CreateService />}
              />
              <Route
                path="/admindfnd001907/advocates/create"
                element={<CreateAdvocate />}
              />
              <Route
                path="/admindfnd001907/advocates/:id"
                element={<EditAdvocate />}
              />
              <Route path="/admindfnd001907/blogs/:id" element={<EditBlog />} />

              {/* <Route path="/admin/login" element={<Login />} /> */}
              <Route path="/admindfnd001907/slides" element={<Slides />} />
              <Route
                path="/admindfnd001907/slides/create"
                element={<CreateSlide />}
              />
              <Route
                path="/admindfnd001907/slides/:id"
                element={<EditSlide />}
              />

              <Route path="/admindfnd001907/services" element={<Services />} />
              <Route path="/admindfnd001907/setting" element={<Settings />} />
              <Route
                path="/admindfnd001907/setting/create"
                element={<CreateSetting />}
              />
              <Route
                path="/admindfnd001907/advocates"
                element={<Advocates />}
              />
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
