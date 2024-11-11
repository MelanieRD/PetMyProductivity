import { useEffect } from "react";
import { PetAnimation } from "./PetAnimation_class";
import { useCanvas } from "../../src/hooks/useCanvas";

const ruta = "../../src/assets/Pets/Cat/SpriteSheets/";
const IdleAnimationObj = new PetAnimation(`${ruta}CatIdle.png`, 523, 574, 25); // este es mi objeto creado;
const IdleAnimationObj2 = new PetAnimation(`${ruta}CatTailM.png`, 523, 574, 25); // este es mi objeto creado;
const openMouthTransitionAnimation = new PetAnimation(`${ruta}IdleToOpenMouth_Transition.png`, 523, 575, 21);
const openMouthCat = new PetAnimation(`${ruta}CatOpenMouthTailMove.png`, 523, 574, 22);
const eatingCat = new PetAnimation(`${ruta}EatingCat.png`, 523, 574, 21);
const angryCat = new PetAnimation(`${ruta}AngryCat.png`, 523, 574, 37);

const animations = [IdleAnimationObj, IdleAnimationObj2, openMouthTransitionAnimation, openMouthCat, eatingCat, angryCat];

// ------------------------- This is part of my background, I will edit this later on
const floor = new Image();
floor.src = "../../src/assets/House/Floor/LightbrownFloor.png";
const wall = new Image();
wall.src = "../../src/assets/House/Walls/yellowWall.png";
//--------------------------------------------------------------------------------------------
export const UsePetAnimation = ({ canvasR }) => {
  useCanvas(canvasR, (canvas, ctx) => {
    const Canvas_Width = (canvas.width = 1400);
    const Canvas_Height = (canvas.height = 800);

    let currentAnimationObj = animations[0];

    let frameX = 0;
    let gameFrame = 0;
    let animationChanger = 0;
    const divisorGameFrame = 1.5;

    const randomNum = () => {
      let randomNu = Math.floor(Math.random() * 2);
      return randomNu;
    };

    function animate() {
      ctx.clearRect(0, 0, Canvas_Width, Canvas_Height);
      //Background here, I will edit this later, so it can be alone in anocher function
      ctx.drawImage(floor, 0, 0);
      ctx.drawImage(wall, 0, 0);
      //----------------------------------------------------------------------------------
      ctx.drawImage(
        currentAnimationObj.petImage,
        frameX * currentAnimationObj.petSpriteWidth,
        0,
        currentAnimationObj.petSpriteWidth,
        currentAnimationObj.petSpriteHeight,
        410,
        190,
        currentAnimationObj.petSpriteWidth,
        currentAnimationObj.petSpriteHeight
      );

      if (gameFrame % divisorGameFrame == 0) {
        frameX++;

        if (frameX >= currentAnimationObj.petSpriteFrames) {
          frameX = 0;
          animationChanger++;
        }

        if (animationChanger >= 5) {
          currentAnimationObj = animations[randomNum()];
          animationChanger = 0;
        }
      }

      gameFrame++;

      requestAnimationFrame(animate);
    }

    animate();
  });
  return <></>;
};
