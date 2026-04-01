import React from "react";
import StudentCard from "./StudentCard";

function App() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(to right, #667eea, #764ba2)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
    },
    title: {
      width: "100%",
      textAlign: "center",
      color: "white",
      marginTop: "20px",
    },
  };

  // Student data (parent holds data)
  const students = [
    { name: "Surya", department: "CSE", marks: 85 },
    { name: "Ravi", department: "IT", marks: 78 },
    { name: "Anu", department: "ECE", marks: 92 },
    { name: "Priya", department: "EEE", marks: 88 },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Cards</h1>

      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          department={student.department}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;