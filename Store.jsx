import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Name from './Name';
import Edit from './Edit';
import characterReducer from "./Character";

const teststore = createStore(characterReducer);

export default function Store() {
  return (
    <>
      <Provider store={teststore}>
        <Name />
        <Edit />
      </Provider>
    </>
  )
}