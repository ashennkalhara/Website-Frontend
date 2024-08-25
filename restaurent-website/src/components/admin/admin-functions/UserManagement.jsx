import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/staff');
      setStaffList(response.data);
    } catch (error) {
      console.error('Failed to fetch staff list', error.response ? error.response.data : error.message);
    }
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/staff/register', {
        name,
        email,
        password,
      });
      setLoading(false);
      if (response.status === 201) {
        setName('');
        setEmail('');
        setPassword('');
        fetchStaffList(); 
      }
    } catch (error) {
      setLoading(false);
      console.error('Failed to add staff', error.response ? error.response.data : error.message);
    }
  };

  const handleDelete = async (staffId) => {
    try {
        await axios.delete(`http://localhost:3000/api/staff/${staffId}`); 
        fetchStaffList(); 
    } catch (error) {
        console.error('Failed to delete staff', error.response ? error.response.data : error.message);
    }
};

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Staff Management</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Staff</h2>
        <form onSubmit={handleAddStaff} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Staff'}
          </button>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffList.length > 0 ? (
              staffList.map((staff) => (
                <tr key={staff._id} className="border-t">
                  <td className="px-4 py-2">{staff.name}</td>
                  <td className="px-4 py-2">{staff.email}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(staff._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No staff members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffManagement;
