import React from 'react'

console.log("Title rendering");
function Title(props) {
  return (
    <div>
      <h2>usecallback hooks</h2>
    </div>
  )
}

export default React.memo(Title);
//export default Title

// React.memo is a hogher order component (HOC) that a functional component.
 
// form being re-rendered if its props or state do not change.