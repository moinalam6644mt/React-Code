import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Edit = () => {
  //Get the whole state from characterReducer
  const person = useSelector(state => state);


  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="row">
        <div className="input-field col s4">
          <input
            value={person.name}
            id="name"
            type="text"
            onChange={e => dispatch({ type: 'CHANGE_NAME', payload: e.target.value })} />

          <label htmlFor="name" className="active">Name</label>
        </div>
        <div className="input-field col s4">
          <input
            value={person.email}
            id="occupation"
            type="text"
            onChange={e => dispatch({ type: 'CHANGE_EMAIL', payload: e.target.value })} />
          <label htmlFor="occupation" className="active">Email</label>
        </div>

      </div>
    </div>
  );
}

export default Edit;