import React, { useState, useEffect } from "react";
const UserContext = React.createContext({});
import { decodeToken } from "react-jwt";
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(import.meta.env.VITE_API_TOKEN_KEY);
    console.log(token, "El token ofuscado");
    if (token) {
      const decodedToken = decodeToken(token);
      console.log(decodedToken, "El token decodificado");
      setUser({
        id: decodedToken.user.id,
        name: decodedToken.user.full_name,
      });
    }
  }, []);

  const login = (token) => {
    const decodedToken = decodeToken(token);

    setUser({
      id: decodedToken.user.id,
      name: decodedToken.user.full_name,
    });

    window.localStorage.setItem(import.meta.env.VITE_API_TOKEN_KEY, token);
    // window.localStorage.setItem("user", JSON.stringify({
    //     id: decodedToken.user.id,
    //     name: decodedToken.user.full_name,
    // }));
  };

  const logout = () => {
    window.localStorage.removeItem(import.meta.env.VITE_API_TOKEN_KEY);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
