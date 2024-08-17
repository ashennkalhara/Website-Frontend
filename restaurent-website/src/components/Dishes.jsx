import React, { useState, useEffect } from "react";
import axios from "axios";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch foods when the component mounts
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/foods');
      setFoods(response.data);
    } catch (error) {
      console.error('Failed to fetch foods', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Food Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {foods.length > 0 ? (
          foods.map((food) => (
            <DishesCard
              key={food._id}
              img={`http://localhost:3001/uploads/${food.image}`} // Update with the correct path to the image
              title={food.name}
              price={`LKR ${food.price}`}
            />
          ))
        ) : (
          <p className="text-gray-600">No dishes available.</p>
        )}
      </div>
    </div>
  );
};

export default Dishes;