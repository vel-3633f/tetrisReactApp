import { useEffect, useState } from "react";
import { testData } from "../lib/constants/tetrisData";

export const useTetris = () => {
  const [currentBlockAry, setCurrentBlockAry] = useState(testData);
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedBlockAry = [...currentBlockAry];
      console.log(updatedBlockAry, currentBlockAry);
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
          if (updatedBlockAry[i][j] === 1) {
            updatedBlockAry[i][j] = 0;
            updatedBlockAry[i + 1][j] = 1;
          }
        }
      }
      setCurrentBlockAry(updatedBlockAry);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return currentBlockAry;
};
