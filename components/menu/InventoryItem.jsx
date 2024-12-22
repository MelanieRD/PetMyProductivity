import { use, useEffect } from "react";
import { useUser } from "../../src/pages/CreateContext";

export const InventoryItem = ({ item, handlePetMouthO, handleDragEnd }) => {
  return (
    <>
      <div className="itemInventory" draggable="true" onDragStart={(ev) => handlePetMouthO(ev, item)} onDragEnd={handleDragEnd}>
        <img src="../../src/assets/Shop/chiken.png" alt="chiken" id="chikeeeen" />
      </div>
    </>
  );
};
