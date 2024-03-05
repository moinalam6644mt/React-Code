import React, { useState } from "react";

const TableList = ({ id, name, price }) => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addval = () => {
    setData([...data, { id, name, price, quantity }]);
  };

  return (
    <div className="list">
      <ul style={{ color: 'red', backgroundColor: 'green' }}>
        <li> Id : {id} </li>
        <li> name: {name}</li>
        <li> Price : {price}</li>
        <li>
          Select Quantity
          <select
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>
      </ul>

      <input
        className="btn"
        type="button"
        value="Add Data"
        onClick={addval}
      />
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index} style={{ color: 'black', backgroundColor: 'pink' }}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
