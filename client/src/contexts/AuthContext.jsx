import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // console.log(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}

// NOTE
// This useAuth function simplifies
// const { user, login, logout } = useContext(AuthContext);
// children prop is implicitly passed, as whatever component is nested inside the parent component
