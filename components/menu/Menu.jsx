import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Menu.css";
import { usePetAnimationCtx } from "../../src/assets/Contexts/PetAnimationContext";
import { handleCreateShopForUser } from "../../src/utils/utilsForShop";
import { InventoryItem } from "./inventoryItem";

import { use, useEffect } from "react";
import { useUser } from "../../src/pages/CreateContext";

export const Menu = () => {
  const { dropCorrectly, handleDropCorrectly, openMouth, petEating, handlePetMouthOpen, handlePetEating } = usePetAnimationCtx();

  const contextData = useUser();

  if (!contextData.userData || !contextData.userData || contextData.shopListUser.length === 0) {
    return <div>Loading...</div>; // Mensaje de carga o contenido inicial
  }
  const user = contextData.userData;
  const shopList = contextData.shopListUser[0].items;

  //console.log("desde el inventory " + JSON.stringify(contextData.shopListUser[0].items));

  const handlePetMouthO = (ev, item) => {
    //Drag Start

    ev.dataTransfer.setData("application/json", JSON.stringify(item));
    handlePetMouthOpen();

    console.log("openMouth al dragStart: " + openMouth);
    console.log("petEating al dragStart: " + petEating);
  };

  const handleDragEnd = (ev) => {
    console.log("DragEnd");
    if (dropCorrectly) {
      // ev.target.remove();
      handleEating();
      handleDropCorrectly();
    } else {
      handlePetMouthOpen();
    }
  };

  const handleEating = () => {
    console.log("openMouth: " + openMouth + " petEating: " + petEating);
    handlePetMouthOpen();
    handlePetEating();
  };

  return (
    <>
      <Outlet />
      <div className="dropdown-container">
        <ul className="dropdown">
          <li className="dropdown-item">
            Inventory
            <ul className="submenu">
              <div className="inventorySubMenu">
                {shopList.map((item, index) => {
                  if (item.type === "Food") {
                    if (item.quantity > 0) {
                      return <InventoryItem key={index} item={item} handlePetMouthO={handlePetMouthO} handleDragEnd={handleDragEnd} />;
                    }
                  }
                })}
              </div>
            </ul>
          </li>
          <Link to="Shop">
            <li className="dropdown-item">Shop</li>
          </Link>

          <li className="dropdown-item">Customize</li>

          <li className="dropdown-item">Calendar</li>
        </ul>

        {/* Renderiza la current ruta seeleccionada */}
      </div>
    </>
  );
};
