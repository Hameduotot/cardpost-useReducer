import React, { createContext } from "react";

export const Context = createContext();

function PostContex({ value, children }) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default PostContex;
