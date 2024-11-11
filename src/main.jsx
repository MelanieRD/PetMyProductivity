import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameCanvas from "../components/GameCamvas/GameCanvas";
import { Menu } from "../components/menu/Menu";

import { GameRoom } from "./pages/GameRoom";
import { GameShop } from "./pages/GameShop";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameLogIn } from "./pages/GameLogIn";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameCanvas />}>
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
