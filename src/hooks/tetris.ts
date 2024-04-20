import { useEffect } from "react";
import { iniData } from "../lib/constants/tetrisData";
import { BlockProps } from "../lib/interface/gameProps";

export const useTetris = ({ currentBlock, setCurrentBlock }: BlockProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedBlock = oneDropFunc(currentBlock);
      setCurrentBlock(updatedBlock);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentBlock]);
};

const oneDropFunc = (block: number[][]) => {
  const updatedBlock = block.map((row) => [...row]);
  dropLoop: for (let i = 0; i < iniData.width; i++) {
    for (let j = 0; j < iniData.height - 1; j++) {
      if (updatedBlock[i + 1] && updatedBlock[i][j] === 1) {
        updatedBlock[i][j] = 0;
        updatedBlock[i + 1][j] = 1;
        break dropLoop;
      }
    }
  }
  return updatedBlock;
};
