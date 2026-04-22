import React from "react";

function StudentRow({ student, updateScore }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td>
        {student.score >= 40 ? (
          <span style={{ color: "green", fontWeight: "bold" }}>
            Pass
          </span>
        ) : (
          <span style={{ color: "red", fontWeight: "bold" }}>
            Fail
          </span>
        )}
      </td>

      <td>
        <input
          type="number"
          onChange={(e) =>
            updateScore(student.id, e.target.value)
          }
        />
      </td>
    </tr>
  );
}

export default StudentRow;
