import { useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [spend, setSpend] = useState("");
  const [message, setMessage] = useState("");

  // Add customer
  const addCustomer = async () => {
    const res = await fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, spend }),
    });
    const data = await res.json();
    setCustomers([...customers, data.data]);
    setMessage("Customer added!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mini CRM</h1>

      <h2>Add Customer</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Spend"
        value={spend}
        onChange={(e) => setSpend(e.target.value)}
      />
      <button onClick={addCustomer}>Add</button>
      <p>{message}</p>

      <h2>Customers List</h2>
      <ul>
        {customers.map((c, i) => (
          <li key={i}>
            {c.name} - ₹{c.spend}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
