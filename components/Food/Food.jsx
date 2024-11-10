import { useEffect } from "react";

export const Food = (canvasRef) => {
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // function foodAnimation() {
      //   ctx.fillStyle = "red";
      //   ctx.fillRect(200, 200, 100, 100);

      //   requestAnimationFrame(foodAnimation);
      // }

      // foodAnimation();
    }
  }, [canvasRef]);
};
