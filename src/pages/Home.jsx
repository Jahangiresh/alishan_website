import React from "react";
import About from "../components/About";
import Branches from "../components/Branches";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
// import "../assets/css/app.scss";
const Home = () => {
  return (
    <div className="home ">
      <Cover />
      <About />
      <Branches />
      <Footer />
    </div>
  );
};

export default Home;
