import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Apiex2() {
  const [data, setData] = useState({});
  const ref1 = useRef();

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
          (res) => { setData(res.data[2]) }
        )
        .catch(
          (err) => { console.log(err) }
        )
      ref1.current.innerText = "Thank You.Visit Again!";
    }, 5000)
  }, [])

  return (
    <>
      <ul>
        <li>ID :{data?.id}</li>
        <li>Name : {data?.name}</li>
        <li>Email: {data?.email}</li>
        <li>street : {data?.address?.street}</li>
        <li>City : {data?.address?.city}</li>
        <li>Company : {data?.company?.name}</li>
      </ul>
      <h3 ref={ref1}>plz wait for a while....</h3>
    </>
  )
}