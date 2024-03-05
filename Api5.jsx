import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Apiex4() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setTimeout(
      () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(
            (res) => { setInfo(res.data) }
          )
          .catch((err) => { console.log(err) })
      }, 5000
    )
  }, [])

  return (
    <>
      <h3>Dynamic Multi dropdown polulate by api</h3>
      <select multiple>
        {
          info.map((data) => {
            return (
              <option value={data?.id}>{data?.address?.city}</option>
            )
          })
        }
      </select>

    </>
  )
}