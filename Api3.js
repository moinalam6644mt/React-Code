import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingSpinner from './Spinner';

const Api3 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000)
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (

        <table border={1} style={{ marginTop: '40px', textAlign: 'center', fontSize: '16px' }}>
          <thead style={{ color: 'white', backgroundColor: 'blue' }}>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>
              <th>Lat</th>
              <th>Lng</th>
              <th>Company name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((userData) => (
              <tr key={userData.id} style={{ color: 'black', fontSize: '14px', backgroundColor: 'lightgray' }}>
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
                <td>{userData.address?.street}</td>
                <td>{userData.address?.city}</td>
                <td>{userData.address?.geo?.lat}</td>
                <td>{userData.address?.geo?.lng}</td>
                <td>{userData.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Api3;
