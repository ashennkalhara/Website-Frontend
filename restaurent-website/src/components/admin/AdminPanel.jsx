import React, { useState } from 'react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'reservations':
        return <ReservationsManagement />;
      case 'queries':
        return <QueriesManagement />;
      case 'payments':
        return <PaymentsManagement />;
      case 'users':
        return <UserManagement />;
      case 'content':
        return <ContentManagement />;
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
                  Payments
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === 'users'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('users')}
                >
                  User Management
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
                  Content Management
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
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dashboard</h2>
      <p className="text-gray-600">Overview of key metrics and activities.</p>
      {/* Add charts, stats, etc. */}
    </div>
  );
};

const ReservationsManagement = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reservations Management</h2>
      <p className="text-gray-600">View, approve, or reject reservations.</p>
      {/* Add reservation table/list with action buttons */}
    </div>
  );
};

const QueriesManagement = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Queries Management</h2>
      <p className="text-gray-600">View and respond to customer queries.</p>
      {/* Add a list of queries with response options */}
    </div>
  );
};

const PaymentsManagement = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payments Management</h2>
      <p className="text-gray-600">View and manage payment transactions.</p>
      {/* Add a list of payments with transaction details */}
    </div>
  );
};

const UserManagement = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Management</h2>
      <p className="text-gray-600">Manage different users with varying access rights.</p>
      {/* Add user management functionalities */}
    </div>
  );
};

const ContentManagement = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Content Management</h2>
      <p className="text-gray-600">Update and manage website content like menus, gallery, etc.</p>
      {/* Add form or editor for updating website content */}
    </div>
  );
};

export default AdminPanel;
