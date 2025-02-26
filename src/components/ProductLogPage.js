import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductLogPage = () => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("http://localhost:5031/api/products/logs");
        if (!response.ok) {
          throw new Error("Failed to fetch logs");
        }
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  const handleNavigateAddProduct = () => {
    navigate("/");
  };

  const handleNavigateProductLog = () => {
    navigate("/products");
  };

  const getActionBadgeClass = (action) => {
    switch (action) {
      case "ADD":
        return "bg-green-500 text-white";
      case "UPDATE":
        return "bg-yellow-500 text-white";
      case "DELETE":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  if (logs.length === 0) {
    return <div>No logs available</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mt-5 ">
        <button
          onClick={handleNavigateAddProduct}
          className="bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
        + Add Product
        </button>

        <button
          onClick={handleNavigateProductLog}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          View Product
        </button>
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Product Logs
      </h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product ID</th>
            <th className="py-2 px-4 border-b">Action</th>
            <th className="py-2 px-4 border-b">New Value</th>
            <th className="py-2 px-4 border-b">update Value</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td className="py-2 px-4 border-b">{log.productId}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ${getActionBadgeClass(
                    log.action
                  )}`}
                >
                  {log.action}
                </span>
              </td>
              <td className="py-2 px-4 border-b">{log.newValue}</td>
              <td className="py-2 px-4 border-b">{log.action === 'ADD' ? '-' : log.oldValue}</td>
              <td className="py-2 px-4 border-b">
                {log.timestamp
                  ? new Date(log.timestamp).toLocaleString()
                  : "Invalid Date"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductLogPage;
