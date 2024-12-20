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
import { usePetAnimationCtx } from "../../src/assets/Contexts/PetAnimationContext";

const GameCanvas = ({}) => {
  //const { tokenT, setTokenT } = useContext(TokenContext);
  const contextData = useUser();
  const canvasRef = useRef(null);

  // Validar si userData está disponible
  if (!contextData.userData || !contextData.userData.pet) {
    return <div>Loading...</div>; // Mensaje de carga o contenido inicial
  }

  // Datos de contextos
  const { pet } = contextData.userData;
  const { openMouth, petEating, handlePetMouthOpen, handlePetEating } = usePetAnimationCtx();

  console.log("Intentando acceder al contextData " + JSON.stringify(contextData.userData));

  const Token = contextData.userData._id;

  const handleDrop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    console.log("Data: " + data);
    ev.target.appendChild(document.getElementById(data));
  };

  const handleDragOver = (ev) => {
    ev.preventDefault(); //allowDrop
    handleEating();
  };

  const handleEating = () => {
    console.log("openMouth: " + openMouth + " petEating: " + petEating);
    handlePetMouthOpen();
    handlePetEating();
  };

  return (
    <>
      HOLA {contextData.userData.pet.petName}
      <Background canvasR={canvasRef} />
      <UsePetAnimation canvasR={canvasRef} />
      <div className="canvasContainer">
        <div className="wrapper">
          <Card />

          <div className="drop droptry" onDrop={handleDrop} onDragOver={handleDragOver}></div>
          <canvas className="canvas1" ref={canvasRef}></canvas>
          <Task />
        </div>

        <Menu />
      </div>
    </>
  );
};

export default GameCanvas;
