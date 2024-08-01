"use client";
import React, { createContext, useContext, useState, useReducer } from "react";
const MainContext = createContext();
//----------------------- REDUCER -------------------
const mainReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, currentUser: action.payload };
    case "TOGGLE_MODE":
      return { ...state, mode: state.mode === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
const initialState = {
  currentUser: { name: "Guest", email: "" },
  mode: "light",
  emoji: ":sun_with_face:",
};
// --------------------------------------------------
export const MainProvider = (props) => {
  //--------------------------------------------------------
  const [state, dispatch] = useReducer(mainReducer, initialState);
  //----------------------------------------------------------
  const handleUpdateUser = (user) => {
    //------------------------------
    dispatch({ type: "UPDATE_USER", payload: user });
    //------------------------------
  };
  const toggleMode = () => {
    //-----------------------------------
    dispatch({ type: "TOGGLE_MODE" });
    //-----------------------------------
  };
  // STATES
  return (
    <MainContext.Provider value={{ ...state, handleUpdateUser, toggleMode }}>
      {props.children}
    </MainContext.Provider>
  );
};
export const useMainContext = () => {
  return useContext(MainContext);
};

export default MainProvider;