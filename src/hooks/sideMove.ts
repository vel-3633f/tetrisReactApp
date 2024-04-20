import { iniData } from "../lib/constants/tetrisData";
import { BlockProps } from "../lib/interface/gameProps";

export const useLeftMoveBlock = ({
  currentBlock,
  setCurrentBlock,
}: BlockProps) => {
  const updatedBlock = currentBlock.map((row) => [...row]);
  dropLoop: for (let i = 0; i < iniData.width - 1; i++) {
    for (let j = 1; j < iniData.height; j++) {
      if (updatedBlock[i][j] === 1) {
        updatedBlock[i][j] = 0;
        updatedBlock[i][j - 1] = 1;
        break dropLoop;
      }
    }
  }
  setCurrentBlock(updatedBlock);
};

export const useRightMoveBlock = ({
  currentBlock,
  setCurrentBlock,
}: BlockProps) => {
  const updatedBlock = currentBlock.map((row) => [...row]);
  dropLoop: for (let i = 0; i < iniData.width - 1; i++) {
    for (let j = 0; j < iniData.height; j++) {
      if (updatedBlock[i][j] === 1) {
        updatedBlock[i][j] = 0;
        updatedBlock[i][j + 1] = 1;
        break dropLoop;
      }
    }
  }
  setCurrentBlock(updatedBlock);
};
