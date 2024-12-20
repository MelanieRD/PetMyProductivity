import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Menu.css";
import { usePetAnimationCtx } from "../../src/assets/Contexts/PetAnimationContext";

export const Menu = () => {
  const { dropCorrectly, handleDropCorrectly, openMouth, petEating, handlePetMouthOpen, handlePetEating } = usePetAnimationCtx();

  const handlePetMouthO = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    handlePetMouthOpen();

    console.log("openMouth al dragStart: " + openMouth);
    console.log("petEating al dragStart: " + petEating);
  };

  const handleDragEnd = (ev) => {
    console.log("DragEnd");

    if (dropCorrectly) {
      ev.target.remove();
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
                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" id="chikeeeen" />
                </div>

                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" />
                </div>

                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" />
                </div>

                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" />
                </div>

                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" />
                </div>

                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" />
                </div>

                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" />
                </div>

                <div className="itemInventory" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd}>
                  <img src="../../src/assets/Shop/chiken.png" alt="chiken" />
                </div>

                {/* <img src="../../src/assets/Shop/chiken.png" id="drag1" alt="chiken" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleDragEnd} /> */}
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
