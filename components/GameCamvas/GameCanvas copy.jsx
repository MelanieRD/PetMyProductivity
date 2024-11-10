// import { useEffect, useRef, useState } from "react";
// import "./GameCanvas.css";
// import Select from "react-select"; // npm i --save react-select

// import React from "react";

// const petAnimation = (canvasRef, optionAnimation) => {
//   const animationStates = [
//     { name: "idle", frames: "7" },
//     { name: "playing", frames: "7" },
//     { name: "tired", frames: "7" },
//   ];
//   useEffect(() => {
//     let animationName = "idle";

//     if (optionAnimation) {
//       animationName = optionAnimation;
//     }

//     if (canvasRef) {
//       const canvasRefC = canvasRef.current;

//       const ctx = canvasRefC.getContext("2d");
//       const petCanvas_Width = (canvasRefC.width = 600);
//       const petCanvas_Height = (canvasRefC.height = 600);
//       const petSpriteImg = new Image();
//       petSpriteImg.src = "../../src/assets/Pets/Dog/shadow_dog.png";

//       // -------------------

//       const spriteWidth = 575;
//       const spriteHeight = 523;

//       let gameFrame = 0;
//       const staggerFrames = 4;

//       //----------------------------  Haciendo mi obj con mis diferentes animaciones obvi ---------------------------------------

//       const spriteAnimations = [];

//       animationStates.forEach((stateAnimation, index) => {
//         let xValue = 0;
//         let yValue = 0;

//         let frames = { loc: [] };

//         stateAnimation.id = index;
//         stateAnimation.loc = [];

//         for (let i = 0; i < stateAnimation.frames; i++) {
//           xValue = i * spriteWidth;
//           yValue = index * spriteHeight;

//           frames.loc.push({ x: xValue, y: yValue });
//         }

//         spriteAnimations[stateAnimation.name] = frames;
//       });
//       //console.log(spriteAnimations);

//       //--------------------------------------------------------------------------------------------------------------------------

//       // console.log(spriteAnimations[animationName].loc.length);

//       function animate() {
//         ctx.clearRect(0, 0, petCanvas_Width, petCanvas_Height);

//         let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[animationName].loc.length;
//         let frameX = spriteWidth * position;
//         let frameY = spriteAnimations[animationName].loc[position].y;
//         ctx.drawImage(petSpriteImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

//         gameFrame++;
//         requestAnimationFrame(animate); // Importante, sin esto no nos dibujara el Frame que deseamos
//       }

//       animate();
//     }
//   }, [canvasRef, optionAnimation]);

//   // ------------------------------------------------
// };

// const options = [
//   { value: "idle", label: "1" },
//   { value: "playing", label: "2" },
//   { value: "sleep", label: "3" },
//   { value: "hungry", label: "4" },
//   { value: "eat", label: "5" },
//   { value: "sad", label: "6" },
//   { value: "happy", label: "7" },
// ];

// const GameCanvas = () => {
//   const canvasRef = useRef(null);
//   const [selectedOption, setSelectedOption] = useState("idle");

//   const handleSelectChange = (selectedOption) => {
//     setSelectedOption(selectedOption.value);
//   };

//   petAnimation(canvasRef, selectedOption);
//   return (
//     <div className="canvasContainer">
//       <canvas className="canvas1" ref={canvasRef}></canvas>
//       <label htmlFor="animations">Animaciones</label>
//       <Select options={options} onChange={handleSelectChange} />
//     </div>
//   );
// };

// export default GameCanvas;
