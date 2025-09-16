import { useEffect, useState } from "react";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("https://assignment-nsy3.onrender.com")
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campaign Logs</h1>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            {log.customer} - {log.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logs;
