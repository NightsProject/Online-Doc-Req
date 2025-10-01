import React, { useEffect, useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/patients/")
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Patients List</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
