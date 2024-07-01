import { defaultCellFalse } from "../lib/constants/defaultCell";
import { defaltCellProp } from "../lib/interface/gameProps";

const clearFunc = (currentBoard: defaltCellProp[][]) => {
  const clearedBoard = currentBoard.map((ary) => {
    return ary.map((val) => {
      if (val.isDropped) {
        return defaultCellFalse("border");
      }
      return { ...val };
    });
  });

  return clearedBoard;
};

export default clearFunc;
