import React, { useState } from 'react';
import ReservationsManagement from './admin-functions/ReservationsManagement';
import GalleryManagement from './admin-functions/GalleryManagement';
import OffersManagement from './admin-functions/OffersManagement';
import FoodManagement from './admin-functions/FoodManagement';
import PaymentManagement from './admin-functions/PaymentManagement';
import QueryManagement from './admin-functions/QueryManagement';
import UserManagement from './admin-functions/UserManagement';
import AdminDashboard from './admin-functions/AdminDashboard';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'reservations':
        return <ReservationsManagement />;
      case 'queries':
        return <QueryManagement />;
      case 'payments':
        return <PaymentManagement />;
      case 'staff':
        return <UserManagement />;
      case 'content':
        return <GalleryManagement />;
      case 'offers':
        return <OffersManagement />;
      case 'food':
        return <FoodManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>
          <nav className="mb-6">
            <ul className="flex flex-wrap gap-4">
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'dashboard'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  Dashboard
                </button>
              </li>
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
                    activeTab === 'payments'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('payments')}
                >
                  Orders
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'staff'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('staff')}
                >
                  Staff Management
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'content'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('content')}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'offers'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('offers')}
                >
                  Offers
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

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <AdminDashboard/>
    </div>
  );
};

export default AdminPanel;
