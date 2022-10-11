import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const initial = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(initial);

  useEffect(() => {
    if (token) {
      return localStorage.setItem("token", JSON.stringify(token));
    }

    localStorage.removeItem("token");
  }, [token]);
  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {children}
    </LoginContext.Provider>
  );
};
