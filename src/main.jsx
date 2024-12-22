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
import { TaskAdd } from "../components/Task/TaskAdd";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { TaskDetailsView } from "./pages/TaskDetailsView";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import { UserProvider } from "./pages/CreateContext";
import { PetAnimation } from "../components/Pet/PetAnimation_class";
import { PetAnimationProvider } from "./assets/Contexts/PetAnimationContext";
//npm install @fortawesome/fontawesome-free

export default function Main() {
  const { isAuthenticated, userData, tokenUser } = useAuth();
  console.log("isAuthenticated", isAuthenticated);
  //console.log("userData", userData);

  return (
    <UserProvider value={{ isAuthenticated, tokenUser }}>
      <PetAnimationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GameLogIn />} />
            <Route path="/Register" element={<GameRegister />} />
            <Route path="/TokenGenerated/:Token" element={<TokenGenerated />} />

            <Route
              path="/Game"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} userData={userData} token={tokenUser}>
                  <GameCanvas />
                </ProtectedRoute>
              }
            >
              <Route path="Shop" element={<GameShop />} />
              <Route path="TaskAdd" element={<TaskAdd />} />
              <Route path="Details/:idTask" element={<TaskDetailsView />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PetAnimationProvider>
    </UserProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main /> {/* <GameCanvas /> */}
  </StrictMode>
);
