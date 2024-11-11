import { useEffect } from "react";

export const useCanvas = (canvasRef, callback) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      callback(canvas, ctx);
    }
  }, [canvasRef, callback]);
};
