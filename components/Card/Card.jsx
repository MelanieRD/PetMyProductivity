import { use } from "react";
import "./Card.css";
import { useUser } from "../../src/pages/CreateContext";

export const Card = () => {
  const contextData = useUser();
  const petInfo = contextData.userData.pet;
  console.log("contextData pero en el card", contextData);

  return (
    <>
      <div className="Card" id="Card">
        <div className="contentCard">
          <div className="imgCard">
            <img src="../../src/assets/Pets/Cat/ProfilePics/catProfile.png" alt="ProfilePoic" />
          </div>

          <div className="txtCard">
            <h2>{petInfo.petName}</h2>
            <h3>Lvl. {petInfo.petLevel}</h3>
            <input id="expInput" type="range" />
          </div>
        </div>
      </div>
    </>
  );
};
