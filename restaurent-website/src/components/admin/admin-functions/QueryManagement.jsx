import React, { useState, useEffect } from 'react';

const QueryManagement = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/queries/all');
        if (!response.ok) {
          throw new Error(`Failed to fetch queries: ${response.statusText}`);
        }
        const data = await response.json();
        setQueries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  const handleReply = (query) => {
    setSelectedQuery(query);
  };

  const sendReply = async () => {
    if (!replyMessage.trim()) {
      alert('Please enter a reply message.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/queries/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: selectedQuery.email,
          replyMessage,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || 'Failed to send reply');
      }

      alert('Reply sent successfully');
      setSelectedQuery(null);
      setReplyMessage('');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-black mb-8">Customer Queries</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Message</th>
                <th className="py-2 px-4 border">Date & Time</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query) => (
                <tr key={query._id}>
                  <td className="py-2 px-4 border">{query.name}</td>
                  <td className="py-2 px-4 border">{query.email}</td>
                  <td className="py-2 px-4 border">{query.message}</td>
                  <td className="py-2 px-4 border">{new Date(query.createdAt).toLocaleString()}</td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => handleReply(query)}
                      className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700"
                    >
                      Reply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedQuery && (
          <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
            <h3 className="text-2xl font-bold text-black mb-4">Reply to {selectedQuery.name}</h3>
            <textarea
              className="w-full p-3 border rounded-lg mb-4"
              rows="5"
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Write your reply..."
            ></textarea>
            <button
              onClick={sendReply}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Send Reply
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryManagement;
