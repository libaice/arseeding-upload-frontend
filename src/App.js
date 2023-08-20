import React, { useState } from "react";

function App() {
  const [account, updateAccount] = useState("");

  const run = async () => {
    alert("hello,world");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-7">File Upload App</h1>

      <input className="" type="text" />

      <button onClick={run}> Input Button </button>
    </div>
  );
}

export default App;
