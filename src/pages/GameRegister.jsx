import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { Window } from "../../components/Window/Window";
import { Link, Outlet } from "react-router-dom";
import { handleCreateNewPet } from "../utils/utils";

export const GameRegister = () => {
  return (
    <>
      <div className="flexColumnCenter">
        <Window
          content={
            <div className="form-group flexColumnCenter margin">
              <p className="title"> New Pet</p>
              <TextInput labelTxt={"Pet Name: "} idTxt={"petName"} pHolderTxt={"Write a name for your pet"} nameTxt={"PetName"} />
              <Link to="/">Have an account? Better Log In</Link>
              <Button btnTxt={"Create Pet"} functionBtn={handleCreateNewPet} />
            </div>
          }
        />
      </div>
    </>
  );
};
