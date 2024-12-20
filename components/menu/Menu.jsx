import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Menu.css";
import { usePetAnimationCtx } from "../../src/assets/Contexts/PetAnimationContext";

export const Menu = () => {
  const { handlePetMouthOpen, handlePetEating } = usePetAnimationCtx();

  const handlePetMouthO = () => {
    handlePetMouthOpen();
  };

  const handleEating = () => {
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
              <li>Inventory Items here</li>
              <img src="../../src/assets/Shop/chiken.png" alt="chiken" draggable="true" onDragStart={handlePetMouthO} onDragEnd={handleEating} />
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
