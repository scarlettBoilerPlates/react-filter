import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./user";

function App() {
  const [query, setQuery] = useState("");

  // Below search function takes in the data which contains the users array
  // In the return statement the data which has the users array is filtered, that is, for each item in the data(user array) check the first_name of each user, but first, convert them to lowerCase() and check if they match the values of the state variable.

  // Now to check for other data within the array simply use the || (OR operator) to check for them as well.

  // So, we know that repeating yourself in Javascript should be done to the bearest minimum. So, instead of repeating our code for different parameters. We should instead create an array and pass in the different parameters into the arrays

  // some() ==> checks for query inside each element in the keys array

  const keys = ["first_name", "last_name", "email"];

  console.log();

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <h1>React Filter App</h1>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Table data={search(Users)} />

      {/* In the above, the function (search) is called search(). And the argument (data) that it originally is the Users array which is then passed into the function as an argument.  */}
    </div>
  );
}

export default App;
