import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodManagement = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      alert('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:3001/api/foods', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Food added successfully');
      fetchFoods(); // Refresh the list of foods
      setName('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Failed to add food', error.response ? error.response.data : error.message);
      alert('Failed to add food');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this food item?')) {
      try {
        await axios.delete(`http://localhost:3001/api/foods/${id}`);
        alert('Food deleted successfully');
        fetchFoods(); // Refresh the list of foods
      } catch (error) {
        console.error('Failed to delete food', error.response ? error.response.data : error.message);
        alert('Failed to delete food');
      }
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Food Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          Add Food
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Food List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foods.length > 0 ? (
            foods.map((food) => (
              <div key={food._id} className="border rounded-md p-4 bg-white shadow-md">
                <img
                  src={`http://localhost:3001/uploads/${food.image}`}
                  alt={food.name}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
                <p className="text-gray-600">Price: Rs.{food.price}</p>
                <button
                  onClick={() => handleDelete(food._id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No foods available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodManagement;
