import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello", {
      credentials: "include", // if you use cookies/auth that require credentials
    })
      .then((r) => r.json())
      .then((data) => setMsg(data.msg))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Server says:</h1>
      <pre>{msg}</pre>
    </div>
  );
}

export default App;
