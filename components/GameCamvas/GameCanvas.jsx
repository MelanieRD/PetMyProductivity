import { useEffect, useRef, useState } from "react";
import "./GameCanvas.css";
import Select from "react-select"; // npm i --save react-select
import { Background } from "../Background/Background";
import React from "react";
import { UsePetAnimation } from "../Pet/UsePetAnimation";
import { Menu } from "../menu/Menu";
import { Card } from "../Card/Card";
import { Task } from "../Task/Task";
import { Window } from "../Window/Window";
import { useParams } from "react-router-dom";
import { useUser } from "../../src/pages/CreateContext";

const GameCanvas = ({}) => {
  //const { tokenT, setTokenT } = useContext(TokenContext);
  const contextData = useUser();
  const canvasRef = useRef(null);

  // Validar si userData está disponible
  if (!contextData.userData || !contextData.userData.pet) {
    return <div>Loading...</div>; // Mensaje de carga o contenido inicial
  }

  // Datos del contexto
  const { pet } = contextData.userData;

  console.log("Intentando acceder al contextData " + JSON.stringify(contextData.userData));

  const Token = contextData.userData._id;
  //JSON.stringify(contextData?.tokenUser);

  // console.log("En la vista game, este es el token: " + Token + "mandado por el parent con use context:" + JSON.stringify(userData));

  // Acceder a petFindedToken desde userData
  // const petFindedToken = userData?.petFindedToken;
  // console.log("petFindedToken:", petFindedToken);
  // console.log("tokenUser:", token);

  return (
    <>
      HOLA {contextData.userData.pet.petName}
      <Background canvasR={canvasRef} />
      <UsePetAnimation canvasR={canvasRef} />
      <div className="canvasContainer">
        <div className="wrapper">
          <Card />

          <canvas className="canvas1" ref={canvasRef}></canvas>
          <Task />

          {/* Window shop, customize, calendar, and more, I guess idk */}
        </div>

        <Menu />
      </div>
    </>
  );
};

export default GameCanvas;
