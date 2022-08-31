import { useState } from "react";
import "./App.css";
import { Users } from "./user";

function App() {
  const [query, setQuery] = useState("");

  console.log(
    Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  );
  return (
    <div className="App">
      <h1>React Filter App</h1>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
