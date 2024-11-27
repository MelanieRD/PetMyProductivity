import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameCanvas from "../components/GameCamvas/GameCanvas";
import { Menu } from "../components/menu/Menu";
import "./style.css";
import { GameRoom } from "./pages/GameRoom";
import { GameShop } from "./pages/GameShop";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameLogIn } from "./pages/GameLogIn";
import { GameRegister } from "./pages/GameRegister";
import { TokenGenerated } from "./pages/TokenGenerated";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameLogIn />} />
        <Route path="/Register" element={<GameRegister />} />
        <Route path="/TokenGenerated/:Token" element={<TokenGenerated />} />

        <Route path="/Game" element={<GameCanvas />}>
          <Route path="Shop" element={<GameShop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main /> {/* <GameCanvas /> */}
  </StrictMode>
);
