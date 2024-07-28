import { defaltCellProp } from "../lib/interface/gameProps";

export const isGameOverCheck = (
  isCheck: boolean,
  currentBoard: defaltCellProp[][]
) => {
  for (const block of currentBoard[0]) {
    if (block.isAnimal) {
      isCheck = true;
    }
  }
  return isCheck;
};
