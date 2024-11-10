import { useEffect } from "react";

export const Background = ({ canvasR }) => {
  useEffect(() => {
    const canvas = canvasR.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
    }
  }, []);

  return <></>;
};
