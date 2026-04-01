import React from "react";

function StudentProfile() {
  // Store student details in variables
  const name = "Surya Avula";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";

  // JSX structure
  return (
    <div style={styles.container}>
      <h1>Student Profile</h1>

      <div style={styles.card}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Section:</strong> {section}</p>
      </div>
    </div>
  );
}

// Simple styling (optional)
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  card: {
    display: "inline-block",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  }
};

export default StudentProfile;