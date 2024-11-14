import { GameShop } from "../../src/pages/GameShop";
import "./window.css";
import { Link, Outlet } from "react-router-dom";

export const Window = ({ content, route }) => {
  return (
    <>
      <div className="window" id="window">
        <Link to={route}>
          <div className="windowBtn">
            <h2>X</h2>
          </div>{" "}
        </Link>
        <div className="windowContent">{content}</div>
      </div>
    </>
  );
};
