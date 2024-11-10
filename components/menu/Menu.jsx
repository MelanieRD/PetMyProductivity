import "./Menu.css";

export const Menu = () => {
  return (
    <>
      <div className="dropdown-container">
        <ul className="dropdown">
          <li className="dropdown-item">
            Inventory
            <ul className="submenu">
              <li>Inventory Items here</li>
            </ul>
          </li>

          <li className="dropdown-item">Shop</li>

          <li className="dropdown-item">Customize</li>

          <li className="dropdown-item">Calendar</li>
        </ul>
      </div>
    </>
  );
};
