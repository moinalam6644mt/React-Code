import React, { useEffect, useState } from 'react'
import userDetailsContext from './userDetailsContext'
import Child from './Child';

function Userdetails() {

  var [userdetails, setUserdetails] = useState({
    name: 'moin',
    age: '23',
    loc: 'kolkata'
  });

  useEffect(() => {
    setTimeout(() => {
      setUserdetails({ name: 'alam', age: 24, loc: "ranchi" });
    }, 5000)

  }, [])

  return (
    <div>
      <h3>this is the parent component</h3>
      <userDetailsContext.Provider value={userdetails} >
        <Child />
      </userDetailsContext.Provider>
    </div>
  )
}

export default Userdetails
