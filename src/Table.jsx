import React from "react";

const Table = ({ data }) => {
  //   console.log(data);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>

        {/* 
            Below Code says map through the data, for every item inside the data
            output the corresponding data.
         */}
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
