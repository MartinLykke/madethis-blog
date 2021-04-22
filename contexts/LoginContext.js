import React, { useState } from "react";
export const LoginContext = React.createContext();
export const LoginProvider = (props) => {
  const [login, setLogin] = useState([]);

  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
};
