import { useLocation } from "react-router-dom";
import { Shop } from "../../components/Shop/Shop";
import { Window } from "../../components/Window/Window";
import { FullTaskDetail } from "../../components/FullTaskDetail/FullTaskDetail";

export const TaskDetailsView = () => {
  const location = useLocation();
  const { id, token } = location.state || { id: "null", token: "null" };
  console.log("EL ID EEEEEEES: ", id, token);

  return (
    <>
      <Window content={<FullTaskDetail />} newRoute={"/Game/" + token} />
    </>
  );
};
