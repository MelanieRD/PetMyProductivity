import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Menu.css";
import { usePetAnimationCtx } from "../../src/assets/Contexts/PetAnimationContext";

export const Menu = () => {
  const { openMouth, handlePetMouthOpen, handlePetEating } = usePetAnimationCtx();

  const handlePetMouthO = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    handlePetMouthOpen();

    console.log("openMouth al dragStart: " + openMouth);
  };

  return (
    <>
      <Outlet />
      <div className="dropdown-container">
        <ul className="dropdown">
          <li className="dropdown-item">
            Inventory
            <ul className="submenu">
              <li>Inventory Items here</li>
              <img src="../../src/assets/Shop/chiken.png" id="drag1" alt="chiken" draggable="true" onDragStart={handlePetMouthO} />
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
