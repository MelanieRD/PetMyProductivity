import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { Window } from "../../components/Window/Window";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { handlePetLogIng } from "../utils/utils";
import { useRef, useState } from "react";
import { useUser } from "./CreateContext";
export const GameLogIn = () => {
  const tokenInput = useRef("null");
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleSearchPetByToken = async () => {
    let data = null;

    const token = tokenInput.current.value;

    if (token !== "null") {
      data = await handlePetLogIng(token);
    } else {
      console.log("Pet not found");
      return;
    }

    // console.log("dataaaaaaaaa en gamelogin", data?.pet);

    if (data?.pet) {
      // Actualiza el contexto con los datos del usuario
      updateUser(true, token, data.pet);

      console.log("Inicio de sesión exitoso, redirigiendo al juego..." + data.pet);
      navigate("/Game");
    } else {
      console.error("No se encontró la mascota.");
    }
  };

  return (
    <>
      <div className="flexColumnCenter">
        <Window
          content={
            <div className="form-group flexColumnCenter margin">
              <p className="title"> Log In </p>
              <TextInput labelTxt={"Pet Token: "} idTxt={"token"} pHolderTxt={"Write your token to login"} nameTxt={"token"} refe={tokenInput} />
              <Link to="/Register">Don't Have a Pet? Click here to register</Link>
              <Button btnTxt={"Ready!"} functionBtn={handleSearchPetByToken} />
            </div>
          }
        />
      </div>
    </>
  );
};
