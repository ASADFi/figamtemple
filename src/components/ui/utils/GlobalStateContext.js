// context/GlobalStateContext.js
import React, { createContext, useContext, useReducer } from 'react';

const GlobalStateContext = createContext();

const initialState = {
  // initial state values
};

const reducer = (state, action) => {
  switch (action.type) {
    // handle different actions to update state
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
