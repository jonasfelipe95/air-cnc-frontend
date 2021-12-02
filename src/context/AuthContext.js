import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ userId, setUserId, user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
