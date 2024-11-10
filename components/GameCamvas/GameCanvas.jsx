import { useEffect, useRef, useState } from "react";
import "./GameCanvas.css";
import Select from "react-select"; // npm i --save react-select
import { Background } from "../Background/Background";

import React from "react";
import { usePetAnimation } from "../Pet/usePetAnimation";
import { Food } from "../Food/Food";
import { Menu } from "../menu/Menu";
import { Card } from "../Card/Card";
import { Task } from "../Task/task";

const GameCanvas = () => {
  const canvasRef = useRef(null);
  usePetAnimation(canvasRef);
  Food(canvasRef);
  return (
    <>
      <Background canvasR={canvasRef} />
      <div className="canvasContainer">
        <div className="wrapper">
          <Card />
          <canvas className="canvas1" ref={canvasRef}></canvas>
          <Task />
        </div>

        <Menu />
      </div>
    </>
  );
};

export default GameCanvas;
