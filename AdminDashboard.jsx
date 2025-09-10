import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setData(res.data);
      } catch(err) {
        alert("Access denied or server error");
      }
    };
    fetchData();
  }, []);

  if(!data) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <p>Total Users: {data.totalUsers}</p>
      <p>Total Stores: {data.totalStores}</p>
      <ul>
        {data.stores.map(store => (
          <li key={store.id}>{store.name} - {store.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
