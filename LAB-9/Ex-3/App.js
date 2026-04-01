import React, { useState } from "react";

function App() {
  // useState Hook (state initialization)
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Styles (CSS inside JS)
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
      fontFamily: "Arial",
    },
    card: {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      textAlign: "center",
      width: "300px",
    },
    title: {
      marginBottom: "20px",
    },
    count: {
      fontSize: "40px",
      margin: "20px 0",
      color: "#333",
    },
    button: {
      padding: "10px 15px",
      margin: "10px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },
    incBtn: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    decBtn: {
      backgroundColor: "#f44336",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Counter App</h1>

        {/* Display counter value */}
        <div style={styles.count}>{count}</div>

        {/* Buttons */}
        <button
          style={{ ...styles.button, ...styles.incBtn }}
          onClick={increment}
        >
          Increase
        </button>

        <button
          style={{ ...styles.button, ...styles.decBtn }}
          onClick={decrement}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;