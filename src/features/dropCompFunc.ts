import { defaultCellFalse } from "../lib/constants/defaultCell";
import { defaltCellProp } from "../lib/interface/gameProps";

const dropCompFunc = (currentBoard: defaltCellProp[][]) => {
  const dropCompBoard = currentBoard.map((ary) => {
    return ary.map((val) => {
      if (val.isDropped) {
        return defaultCellFalse("border");
      }
      return { ...val };
    });
  });

  return dropCompBoard;
};

export default dropCompFunc;
