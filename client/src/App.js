import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // USING AXIOS TO FETCH SERVER DATA USING A QUERY AS A FORM OF VARIABLE, IT PASSES THE QUERY DATA TO THE QUERY STATE AND WE CAN USE IT TO FILTER OUR DATA ON SEARCH.
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
      console.log(res);
    };

    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <h1>React Filter App</h1>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Table data={data} />
    </div>
  );
}

export default App;
