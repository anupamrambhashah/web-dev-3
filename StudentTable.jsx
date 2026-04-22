function StudentTable({ students, updateScore }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>

      <tbody>
        {students.map((stu) => (
          <tr key={stu.id}>
            <td>{stu.name}</td>
            <td>{stu.score}</td>

            <td>
              {stu.score >= 40 ? (
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
                  updateScore(stu.id, e.target.value)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;