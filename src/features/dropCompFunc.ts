import { defaltCellProp } from "../lib/interface/gameProps";

const dropCompFunc = (currentBoard: defaltCellProp[][]) => {
  const dropCompBoard = currentBoard.map((ary) => {
    return ary.map((val) => {
      if (val.isDropped) {
        console.log(val);
        return { ...val, isDropped: false };
      }
      return { ...val };
    });
  });

  return dropCompBoard;
};

export default dropCompFunc;
