import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

let initialState = {
  data: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  let handleAllAnimations = (type, transObj) => {
    dispatch({
      type: type,
      payload: transObj,
    });
  };

  return (
    <GlobalContext.Provider value={{ data: state.data, handleAllAnimations }}>
      {children}
    </GlobalContext.Provider>
  );
};
