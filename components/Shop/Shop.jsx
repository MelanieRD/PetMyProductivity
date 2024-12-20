import { use, useEffect, useState } from "react";
import "./Shop.css";
import { useUser } from "../../src/pages/CreateContext";
import { handleGetListByType, handleGetListItems } from "../../src/utils/utilsForShop";
import { ItemShop } from "./ItemShop/itemShop";

export const Shop = () => {
  const contextData = useUser();

  if (!contextData.userData || !contextData.userData) {
    return <div>Loading...</div>; // Mensaje de carga o contenido inicial
  }

  const user = contextData.userData;
  const shopList = contextData.shopList;
  const [listItem, setListItem] = useState([]);

  //console.log("Intentando acceder al contextData " + JSON.stringify(shopList));
  // console.log("Shop" + JSON.stringify(contextData.userData));

  const [currentListItem, setCurrentListItems] = useState([]);
  const [activeItem, setActiveItem] = useState("Food");

  useEffect(() => {
    setListItem(JSON.stringify(shopList));
    // console.log("List Items: " + listItem);
    // handleCurrentListItems(typeItem);

    handleCurrentListItems(activeItem);
  }, []);

  const handleCurrentListItems = (activeItem) => {
    setCurrentListItems([]);
    const currentItemListC = [];

    shopList.map((item) => {
      if (item.type === activeItem) {
        currentItemListC.push(item);
      }
    });

    setCurrentListItems(currentItemListC);
  };

  const handleOptionsList = (option) => {
    setActiveItem(option);
    handleCurrentListItems(option);
  };
  return (
    <>
      <div className="border"></div>
      <div className="Shop">
        <div className="SearchBar">
          <div className="shopLabel">
            <li className="shopLabel titleShop">Shop</li>
            <li className="shopLabel coinShop">Coins: {user.coins} </li>
          </div>

          <li className={activeItem === "Food" ? "shopOption active" : "shopOption"} onClick={() => handleOptionsList("Food")}>
            Food
          </li>
          <li className={activeItem === "Walls" ? "shopOption active" : "shopOption"} onClick={() => handleOptionsList("Walls")}>
            Walls
          </li>
          <li className={activeItem === "Floor" ? "shopOption active" : "shopOption"} onClick={() => handleOptionsList("Floor")}>
            Floor
          </li>
          <li className={activeItem === "Curtains" ? "shopOption active" : "shopOption"} onClick={() => handleOptionsList("Curtains")}>
            Curtains
          </li>
          <li className={activeItem === "Views" ? "shopOption active" : "shopOption"} onClick={() => handleOptionsList("Views")}>
            Views
          </li>
          <li className={activeItem === "Furniture" ? "shopOption active" : "shopOption"} onClick={() => handleOptionsList("Furniture")}>
            Furniture
          </li>
        </div>

        <div className="ShopDetails">
          <div className="itemDetail"> hey</div>

          <div className="itemListC">
            <div className="itemList">
              {currentListItem.map((item, index) => (
                <ItemShop key={item._id || index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
