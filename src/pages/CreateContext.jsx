import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const UserContext = createContext();

export const UserProvider = ({ children, value }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(value?.isAuthenticated || false);
  const [tokenUser, setTokenUser] = useState(value?.tokenUser || null);
  const [userData, setUserData] = useState(value?.userData || {});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tokenC = Cookies.get("tokenUser");
    const user = Cookies.get("userData");

    console.log("Desde las cookies" + tokenC + " " + user);
    if (tokenC && user) {
      setIsAuthenticated(true);
      setTokenUser(tokenC);
      setUserData(JSON.parse(user));
    }

    setIsLoading(false); // Finaliza la carga después de procesar cookies
  }, []);

  const updateUser = (auth, token, data) => {
    setIsAuthenticated(auth);
    setTokenUser(token);
    setUserData(data);

    if (auth) {
      Cookies.set("tokenUser", token, { expires: 7 });
      Cookies.set("userData", JSON.stringify(data), { expires: 7 });
    } else {
      Cookies.remove("tokenUser");
      Cookies.remove("userData");
    }
  };

  return <UserContext.Provider value={{ isAuthenticated, tokenUser, userData, updateUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);