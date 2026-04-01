import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);     // store API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  // Fetch data (side effect)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // runs only once

  // UI Rendering
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;