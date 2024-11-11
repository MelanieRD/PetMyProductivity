import { GameShop } from "../../src/pages/GameShop";
import "./window.css";
import { Link, Outlet } from "react-router-dom";

export const Window = () => {
  return (
    <>
      <div className="window" id="window">
        <Link to="/">
          <div className="windowBtn">
            <h2>X</h2>
          </div>{" "}
        </Link>
        <div className="windowContent">
          {/* ESTO VA DESPUES EN OTRO COMPONENTE */}

          <div className="Shop">
            <div className="SearchBar">
              <div className="shopOption"> Cat</div>
              <div className="shopOption"> Walls</div>
              <div className="shopOption"> Floor</div>
              <div className="shopOption"> Curtains</div>
              <div className="shopOption"> Views</div>
              <div className="shopOption"> Furniture</div>

              {/* <label htmlFor="search">Buscar Item </label>
              <input type="search" name="search" id="search" /> */}
            </div>

            <div className="itemList">
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>

              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>

              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>

              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>

              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
            </div>

            <div className="listNavigation">1.. 2.. 3..</div>
          </div>
        </div>
      </div>
    </>
  );
};
