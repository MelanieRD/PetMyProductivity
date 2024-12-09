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

const GameCanvas = () => {
  const canvasRef = useRef(null);
  const { Token } = useParams();
  console.log("En la vista game, este es el token: " + Token);

  return (
    <>
      <Background canvasR={canvasRef} />
      <UsePetAnimation canvasR={canvasRef} />
      <div className="canvasContainer">
        <div className="wrapper">
          <Card />

          <canvas className="canvas1" ref={canvasRef}></canvas>
          <Task token={Token} />

          {/* Window shop, customize, calendar, and more, I guess idk */}

          {}
        </div>

        <Menu />
      </div>
    </>
  );
};

export default GameCanvas;
