import React from "react";
import Servicess from "../Main/Serviecss/Servicess";
import Header from "../Shared/Header/Header";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header></Header>

      <Slider></Slider>
      <Servicess></Servicess>
    </div>
  );
};

export default Home;
