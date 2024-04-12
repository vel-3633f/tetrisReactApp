import { useEffect, useState } from "react";
import { testData } from "../lib/constants/tetrisData";

export const useTetris = () => {
  const [currentBlockAry, setCurrentBlockAry] = useState(testData);
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedBlockAry = [...currentBlockAry];
      dropLoop: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
          if (updatedBlockAry[i][j] === 1) {
            updatedBlockAry[i][j] = 0;
            updatedBlockAry[i + 1][j] = 1;
            break dropLoop;
          }
        }
      }
      setCurrentBlockAry(updatedBlockAry);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return currentBlockAry;
};
