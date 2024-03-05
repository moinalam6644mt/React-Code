import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function FoodRecipes() {
  const [info, setInfo] = useState([])
  useEffect(() => {
    setTimeout(() => {
      axios.get('https://dummyjson.com/recipes')
        .then(
          (res) => {
            setInfo(res.data.recipes)
          }
        )
        .catch(
          (err) => { console.log(err) }
        )
    }, 1000)
  }, [])
  return (
    <>
      {
        info.map((data, index) => {
          return (
            <div>
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={data.image}
                  alt="Card image cap" style={{ height: '30%', width: '40%' }} />
                <div className="card-body">
                  <p>ID: {data.id}</p>
                  <p>Name: {data.name}</p>
                  <p className="card-text">
                    ingredients:
                    <ul>
                      {
                        data.ingredients.map((ingData) => {
                          return <li>{ingData}</li>
                        })
                      }
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}