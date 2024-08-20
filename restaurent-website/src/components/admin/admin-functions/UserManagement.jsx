import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/staff');
        setStaffList(response.data);
      } catch (error) {
        console.error('Failed to fetch staff list', error.response ? error.response.data : error.message);
      }
    };

    fetchStaffList();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Staff Management</h1>
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
                      Delete
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