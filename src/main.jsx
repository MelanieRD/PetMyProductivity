import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameCanvas from "../components/GameCamvas/GameCanvas";
import { Menu } from "../components/menu/Menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameCanvas />
  </StrictMode>
);
