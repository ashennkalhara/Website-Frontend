import React from "react";
import { FaUtensils, FaConciergeBell, FaCocktail } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaUtensils size={40} />,
    title: "Fine Dining",
    description: "Enjoy an exquisite dining experience with our gourmet menu."
  },
  {
    icon: <FaConciergeBell size={40} />,
    title: "Catering",
    description: "Perfect catering solutions for your special events and occasions."
  },
  {
    icon: <GiChefToque size={40} />,
    title: "Chef's Special",
    description: "Experience unique dishes crafted by our world-renowned chefs."
  },
  {
    icon: <FaCocktail size={40} />,
    title: "Bar Service",
    description: "Relax and unwind with our wide selection of cocktails and beverages."
  },
  {
    icon: <MdDeliveryDining size={40} />,
    title: "Home Delivery",
    description: "Delicious meals delivered right to your doorstep, hot and fresh."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 bg-gray-100">
      <h1 className="text-4xl font-semibold text-center pb-10">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 lg:w-1/4 p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="text-primary">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-center">
                {service.title}
              </h2>
              <p className="text-center text-gray-600">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
