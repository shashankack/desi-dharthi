import React from "react";
import "./AboutUs.css";
import greetImg from "../../assets/about-bg-1.jpg";
import cow from "../../assets/cow.jpg";

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="greet-container">
        <div className="greet-img">
          <img src={greetImg} />
        </div>
        <div className="greet-content">
          <p className="greet-title">Welcome To Our Farm</p>
          <p>
            Dairy's journey starts on the farm, and the road we travel
            demonstrates our unwavering commitment to sustainable nutrition, as
            our farmers provide lasting and meaningful nourishment to people,
            the planet, and our communities, both urban and rural.
          </p>
          <ul>
            <li>
              Our delicious foods provide a unique nutrient package that can
              help people.
            </li>
            <li>
              Dairy is a powerful part of the livelihoods of individuals,
              families and communities.
            </li>
            <li>
              Sustainable agriculture practices that reduce our environmental
              footprint.
            </li>
            <li>While taking care of our greatest resource, our animals.</li>
          </ul>
        </div>
      </div>
      
        <div className="mission-content">
          <img src={cow} />
          <div className="content">
            <p className="mission-title">
              Mission of our farm to give best quality milk
            </p>
            <p className="mission-text">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps nanotechnology immersion along the
              information.fruit to identify a ballpark value added activity to
              beta Leverage agile frameworks to provide a robust synopsis for
              high level overviews. Iterative approaches to corporate strategy
              foster ide a robust synopsis for high level overviews.
            </p>
          </div>
      
      </div>
    </section>
  );
};

export default AboutUs;
