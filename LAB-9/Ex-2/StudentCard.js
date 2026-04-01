import React from "react";

function StudentCard(props) {
  const styles = {
    card: {
      backgroundColor: "white",
      padding: "20px",
      width: "250px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      margin: "15px",
      textAlign: "center",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    text: {
      margin: "5px 0",
      color: "#555",
    },
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.text}>Department: {props.department}</p>
      <p style={styles.text}>Marks: {props.marks}</p>
    </div>
  );
}

export default StudentCard;