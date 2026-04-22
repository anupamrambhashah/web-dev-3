import React from "react";   // ✅ IMPORTANT
import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anupam", score: 75 },
    { id: 2, name: "Riya", score: 35 }
  ]);

  const addStudent = (name, score) => {
    if (!name || score === "") return;
    setStudents([...students, { id: Date.now(), name, score }]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  return (
    <div>
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;
