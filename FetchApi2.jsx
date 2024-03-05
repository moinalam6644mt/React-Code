import React, { useState } from 'react';


const FetchApi2 = () => {
  const [info, setInfo] = useState({
    name: '',
    pwd: '',
  });

  const handleInputChange = (e) => {

    setInfo({ ...info, [e.target.name]: e.target.value });
  };



  const fetchData = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ name: info.name, job: info.pwd })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Api call failed');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      ENTER USERNAME: <input type="text" name='uname' onChange={handleInputChange} />
      <br /><br />
      ENTER PASSWORD: <input type='password' name='pwd' onChange={handleInputChange} />
      <br /><br />
      <button type='submit' onClick={fetchData}>Login</button>
    </div>
  );
};

export default FetchApi2;
