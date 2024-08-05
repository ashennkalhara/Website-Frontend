import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img className="w-2/3 lg:w-1/2" src={img} alt="About Us" />

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          At The Heritage Grill, we believe in creating memorable dining experiences. Our chefs meticulously craft each dish using the finest, freshest ingredients to ensure every bite is a culinary delight.
        </p>
        <p>
          Whether you're joining us for breakfast, lunch, or dinner, you'll find an array of gourmet options that celebrate the rich flavors and traditions of our cuisine. From our signature dishes to seasonal specials, we offer something to satisfy every palate.
        </p>
        <p>
          Our menu is designed to showcase a wide variety of flavors, with each dish prepared to perfection. Our signature dishes highlight the best of our culinary expertise, while our seasonal specials bring new and exciting tastes based on the freshest ingredients available. We strive to provide a dining experience that caters to all tastes, ensuring every meal is a celebration of food and flavor.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
