import Home from "../pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/css/app.scss";
import Header from "../components/Header";
const Layout = () => {
  return (
    <div className="layout__app ">
      <Header />
      <Home />
    </div>
  );
};

export default Layout;
