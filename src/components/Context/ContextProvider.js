import context from "./context";
import { useState } from "react";

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const value = {
    cart,
    setCart,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default ContextProvider;
