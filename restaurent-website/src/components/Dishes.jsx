import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Meals
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Kottu Roti" price="LKR 900" rating={4.5} />
        <DishesCard img={img2} title="Fish Ambul Thiyal" price="LKR 1100" rating={5} />
        <DishesCard img={img3} title="Chicken Curry" price="LKR 950" rating={4} />
        <DishesCard img={img4} title="Hoppers" price="LKR 850" rating={4.5} />
        <DishesCard img={img5} title="String Hoppers" price="LKR 750" rating={3.5} />
        <DishesCard img={img6} title="Lamprais" price="LKR 1300" rating={5} />
      </div>
    </div>
  );
};

export default Dishes;
