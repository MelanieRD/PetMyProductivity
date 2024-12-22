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
import { handlequantityItem } from "../../src/utils/utilsForShop";

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
  const { openMouth, petEating, handlePetMouthOpen, handlePetEating, handleDropCorrectly } = usePetAnimationCtx();
  const shopList = contextData.shopListUser[0].items;

  //console.log("Intentando acceder al contextData " + JSON.stringify(contextData.userData));

  const Token = contextData.userData._id;

  const handleDrop = async (ev) => {
    ev.preventDefault();
    const itemData = JSON.parse(ev.dataTransfer.getData("application/json"));
    console.log("Dataaaaaaaa de comida: " + itemData.quantity);
    await handlequantityItem(itemData, Token);

    //ev.target.appendChild(document.getElementById(data));
    handleDropCorrectly();

    console.log("el iteeeeeeeeeeeeeeeeeeeeeem es:" + itemData);

    // Restar quantity del item
    const updatedItems = shopList.map((item) => {
      if (item._id === itemData._id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    contextData.updateInventory(updatedItems);
  };

  const handleDragOver = (ev) => {
    ev.preventDefault(); //allowDrop
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
