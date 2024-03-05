import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios library

const Api4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000)
  })

  const fetchData = () => {
    axios.get('https://reqres.in/api/users?page=2')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.first_name} {data.last_name}</td>
                <td>{data.email}</td>
                <td><img src={data.avatar} alt={data.first_name} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Api4;
