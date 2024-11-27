import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { Window } from "../../components/Window/Window";
import { Link, Outlet } from "react-router-dom";
import { handlePetLogIng } from "../utils/utils";
import { useState } from "react";
export const GameLogIn = () => {
  return (
    <>
      <div className="flexColumnCenter">
        <Window
          content={
            <div className="form-group flexColumnCenter margin">
              <p className="title"> Log In </p>
              <TextInput labelTxt={"Pet Token: "} idTxt={"token"} pHolderTxt={"Write your token to login"} nameTxt={"token"} />
              <Link to="/Register">Don't Have a Pet? Click here to register</Link>
              <Button btnTxt={"Ready!"} functionBtn={handlePetLogIng} />
            </div>
          }
        />
      </div>
    </>
  );
};
