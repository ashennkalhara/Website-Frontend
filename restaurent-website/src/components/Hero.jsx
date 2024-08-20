import React, { useState } from "react";
import Button from "../layouts/Button";
import ReserveModal from "./ReserveModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/home.jpg')] bg-cover bg-no-repeat ">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Taste the Artistry in Every Dish
        </h1>
        <p className="text-backgroundColor">
          Savor the flavors of our gourmet cuisine, where every dish is a masterpiece.
          Our chefs blend fresh ingredients with creative flair to bring you an unforgettable dining experience. Whether it's a hearty breakfast, a satisfying lunch, or a sumptuous dinner,
          delight your taste buds with our delectable offerings.
        </p>
        <Button title="Reserve Now" onClick={handleOpenModal} />
      </div>

      <ReserveModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Hero;
