import React from 'react'

console.log("Count rendering");
function Count(props) {
  return (
    <div>
      {props.text} is {props.count}
    </div>
  )
}

export default React.memo(Count);

