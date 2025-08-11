import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export default function LoginContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(() => {
    const storedAuth = JSON.parse(localStorage.getItem("authenticated"));
    return storedAuth || false;
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentUser"));
    return currentuser || {};
  });

  const logout = () => {
    setAuthenticated(false);
    localStorage.clear();
  };
  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        logout,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
