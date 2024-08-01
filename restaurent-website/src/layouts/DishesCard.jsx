import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = ({ img, title, price, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill key={i} className="text-brightColor" />);
      } else if (i - 0.5 === rating) {
        stars.push(<BsStarHalf key={i} className="text-brightColor" />);
      } else {
        stars.push(<BsStar key={i} className="text-brightColor" />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl" src={img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{title}</h3>
        <div className="flex flex-row justify-center">
          {renderStars()}
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
