import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Edit from './Edit';

const Name = () => {

  const person = useSelector(state => state);

  const [isEdit, setEdit] = useState(false);


  return (
    <section id="section-namecard">
      <h3 className="center-align white-text blue">Name Card</h3>

      <div className="card grey darken-1 namecard">
        <div className="card-content white-text">
          <p className="card-title">{person.name}</p>
          <p>Name: {person.email}</p>


        </div>
      </div>
      {isEdit && <Edit />}


    </section>
  );
}

export default Name;