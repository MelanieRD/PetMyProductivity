import { Shop } from "../../components/Shop/Shop";
import { Window } from "../../components/Window/Window";
import { useNavigate } from "react-router-dom";

export const GameShop = () => {
  const navigate = useNavigate();
  return (
    <>
      <Window content={<Shop />} newRoute={"/Game"} />
    </>
  );
};
