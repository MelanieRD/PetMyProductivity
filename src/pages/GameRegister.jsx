import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { Window } from "../../components/Window/Window";
import { Link, Outlet } from "react-router-dom";
import { handleCreateNewPet } from "../utils/utils";
import { useRef, useState } from "react";
import User from "../../server/classes/User";
import { petTokenGenerator } from "../utils/PetTokenGenerator";

export const GameRegister = () => {
  const petNameValue = useRef("null");

  function handlePetName() {
    const newUser = new User(petNameValue.current.value);
    const token = petTokenGenerator();
    console.log(token);
    handleCreateNewPet(newUser);
  }

  return (
    <>
      <div className="flexColumnCenter">
        <Window
          content={
            <div className="form-group flexColumnCenter margin">
              <p className="title"> New Pet</p>
              <TextInput labelTxt={"Pet Name: "} idTxt={"petName"} pHolderTxt={"Write a name for your pet"} nameTxt={"PetName"} refe={petNameValue} />
              <Link to="/">Have an account? Better Log In</Link>
              <Button btnTxt={"Create Pet"} functionBtn={handlePetName} />
            </div>
          }
        />
      </div>
    </>
  );
};
