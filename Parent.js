import React, { useState, useCallback } from 'react'
import Button from './Button'
import Title from './Title'
import Count from './Count'

function Parent() {

  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(2500);


  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text='age' count={age} />
      <Button handleClick={incrementAge}> Increment My Age</Button>

      <Count text='salary' count={salary} />
      <Button handleClick={incrementSalary}> Increment My Salary</Button>
    </div>
  )
}

export default Parent
