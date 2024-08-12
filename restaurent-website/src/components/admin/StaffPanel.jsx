import React, { useState } from 'react';

const StaffPanel = () => {
  const [activeTab, setActiveTab] = useState('reservations');

  const renderContent = () => {
    switch (activeTab) {
      case 'reservations':
        return <ReservationsManagement />;
      case 'queries':
        return <QueriesManagement />;
      case 'payments':
        return <PaymentsManagement />;
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
                    activeTab === 'payments'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('payments')}
                >
                  Payments
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

export default StaffPanel;
