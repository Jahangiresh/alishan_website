import React from "react";
import { render } from "react-dom";
// import "normalize.css/normalize.css";
import "../scss/dash.scss";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/logo.svg";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <img src={img} alt="" />
    </div>
  );
};
export default Dashboard;
