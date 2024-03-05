import React from 'react';

const ProductProps = ({ data }) => {
  return (
    <div>
      <h3>Selected rows are :</h3>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Total</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.total}</td>
              <td><img src={val.thumbnail} alt="Thumbnail" width="50" height="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductProps;
