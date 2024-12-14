import { useEffect, useState } from "react";
import { GameShop } from "../../src/pages/GameShop";
import "./window.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Window = ({ content, newRoute }) => {
  return (
    <>
      <div className="window" id="window">
        <Link to={newRoute}>
          <div className="windowBtn">
            <h2>X</h2>
          </div>{" "}
        </Link>
        <div className="windowContent">{content}</div>
      </div>
    </>
  );
};
