import React, { useState } from 'react';
import ReservationsManagement from './admin-functions/ReservationsManagement';
import FoodManagement from './admin-functions/FoodManagement';
import QueryManagement from './admin-functions/QueryManagement';

const StaffPanel = () => {
  const [activeTab, setActiveTab] = useState('reservations');

  const renderContent = () => {
    switch (activeTab) {
      case 'reservations':
        return <ReservationsManagement />;
      case 'queries':
        return <QueryManagement />;
      case 'food':
        return <FoodManagement />;
      default:
        return <ReservationsManagement />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Staff Panel</h1>
          <nav className="mb-6">
            <ul className="flex flex-wrap gap-4">
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'reservations'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('reservations')}
                >
                  Reservations
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'queries'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('queries')}
                >
                  Queries
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'food'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('food')}
                >
                  Foods
                </button>
              </li>
            </ul>
          </nav>

          <div className="content-area">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default StaffPanel;
