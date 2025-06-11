import React, { useState } from "react";

const Legacy: React.FC = () => {
  const [code, setCode] = useState<string>('print("Hello from Pico!")');
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRun = async () => {
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch("http://localhost:8000/api/micropython", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      console.log(data);
      setOutput(data.result ?? "No output");
    } catch (err) {
      setOutput("Error: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <h2>Run MicroPython Code on Raspberry Pi Pico</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={70}
        style={{ fontFamily: "monospace", fontSize: 14, width: "100%" }}
      />
      <br />
      <button onClick={handleRun} disabled={loading}>
        {loading ? "Running..." : "Run Code"}
      </button>
      <h4>Output:</h4>
      <pre style={{ background: "#f0f0f0", padding: 10 }}>{output}</pre>
    </div>
  );
};

export default Legacy;
