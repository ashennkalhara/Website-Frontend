import React, { useState, useEffect } from 'react';

const ReservationsManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:3000/reservations');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchReservations();
  }, []);

  const formatDate = (isoDate) => {
    try {
      const date = new Date(isoDate);
      const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedDate = formatter.format(date);
      const timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
      const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
      return `${formattedDate} at ${formattedTime}`;
    } catch (error) {
      return 'Invalid date'; 
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-gray-50 rounded-md shadow-md text-gray-600">
        Loading reservations...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-md shadow-md text-red-500">
        Error fetching reservations: {error}
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reservations Management</h2>
      {reservations.length === 0 ? (
        <p className="text-gray-600">No reservations to display.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date and Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(reservation.date)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">Approve</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservationsManagement;
