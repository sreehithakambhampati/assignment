import { useState } from "react";

function Campaigns() {
  const [condition, setCondition] = useState("");
  const [audienceSize, setAudienceSize] = useState(0);
  const [message, setMessage] = useState("");

  const previewAudience = async () => {
    // Dummy preview (in real case, call backend to filter customers)
    if (condition.includes("spend")) {
      setAudienceSize(2);
    } else {
      setAudienceSize(5);
    }
  };

  const saveCampaign = async () => {
    // Call backend to save campaign
    await fetch("http://localhost:5000/campaigns", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ condition }),
    });
    setMessage("Campaign saved & messages sent!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Campaign</h1>
      <input
        type="text"
        placeholder="Condition (e.g., spend > 5000)"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />
      <button onClick={previewAudience}>Preview Audience</button>
      <p>Audience Size: {audienceSize}</p>
      <button onClick={saveCampaign}>Save Campaign</button>
      <p>{message}</p>
    </div>
  );
}

export default Campaigns;
