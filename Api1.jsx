import React, { useState } from 'react';
import axios from 'axios';

const Api1 = () => {
  const [Data, setData] = useState({});

  const callapi = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        // Set the retrieved data into state
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        alert("API call is over");
      });
  };

  return (
    <div>
      <h3>API Testing</h3>
      <button onClick={callapi}>Click here</button>

      <br /><br />
      <ol>

        {Data && (
          <>
            <li> ID: {Data.userId}</li>
            <li>ID: {Data.id}</li>
            <li>Title: {Data.title}</li>
            <li>Body: {Data.body}</li>
          </>
        )}
      </ol>
    </div>
  );
};

export default Api1;
