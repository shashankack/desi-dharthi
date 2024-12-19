import React from "react";
import "./Home.css";
import carouselImg1 from "../../assets/carousel-1.jpg";
import carouselImg2 from "../../assets/carousel-2.jpg";
import carouselImg3 from "../../assets/carousel-3.jpg";
import Carousel from "./Carousel";

const Home = () => {
  const carouselItems = [
    {
      img: carouselImg1,
      title: "Title 1",
      description: "Description 1",
    },
    {
      img: carouselImg2,
      title: "Title 2",
      description: "Description 2",
    },
    {
      img: carouselImg3,
      title: "Title 3",
      description: "Description 3",
    },
  ];

  return (
    <section className="home-section" id="home">
      <Carousel data={carouselItems} />
    </section>
  );
};

export default Home;
