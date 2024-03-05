import React, { useContext } from 'react'
import userDetailsContext from './userDetailsContext'

function Subchild() {

  var contextData = useContext(userDetailsContext);
  return (
    <div>
      <h2>Sub child Component</h2>

      <ol>
        <li>NAME IS :{contextData.name}</li>
        <li>AGE IS :{contextData.age}</li>
        <li>LOC IS :{contextData.loc}</li>
      </ol>
    </div>
  )
}

export default Subchild
