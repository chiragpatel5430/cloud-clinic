import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default HomePage;
