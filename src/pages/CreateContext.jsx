import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { handleGetListItems, handleGetShopListItemsUser } from "../utils/utilsForShop";

const UserContext = createContext();

export const UserProvider = ({ children, value }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(value?.isAuthenticated || false);
  const [tokenUser, setTokenUser] = useState(value?.tokenUser || null);
  const [userData, setUserData] = useState(value?.userData || {});
  const [isLoading, setIsLoading] = useState(true);
  const [shopListUser, setShopListUser] = useState([]);

  useEffect(() => {
    const tokenC = Cookies.get("tokenUser");
    const user = Cookies.get("userData");

    //console.log("Desde las cookies" + tokenC + " " + user);
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
    getShopUser(token);

    if (auth) {
      Cookies.set("tokenUser", token, { expires: 7 });
      Cookies.set("userData", JSON.stringify(data), { expires: 7 });
    } else {
      Cookies.remove("tokenUser");
      Cookies.remove("userData");
    }
  };

  const getShopUser = async (token) => {
    // console.log("el tokeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen:" + token);
    try {
      const data = await handleGetShopListItemsUser(token);
      setShopListUser(data);
    } catch (error) {
      console.error("Error al obtener la lista de la tienda", error);
    }

    console.log("get ejecutado ShopListUser: " + shopListUser);
  };

  const updateInventory = (updatedItems) => {
    setShopListUser((prevShopListUser) => {
      const newShopListUser = [...prevShopListUser];
      newShopListUser[0].items = updatedItems;
      return newShopListUser;
    });
  };

  return <UserContext.Provider value={{ isAuthenticated, tokenUser, userData, updateUser, shopListUser, getShopUser, updateInventory }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
