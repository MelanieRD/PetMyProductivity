import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  return (
    <>
      <Outlet />
      <div className="dropdown-container">
        <ul className="dropdown">
          <li className="dropdown-item">
            Inventory
            <ul className="submenu">
              <li>Inventory Items here</li>
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
