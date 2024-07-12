import { defaltCellProp } from "../lib/interface/gameProps";

//配列を90度右に回転
function rotate(array: defaltCellProp[][]): defaltCellProp[][] {
  const ROW = array.length;
  const COL = array[0].length;
  const row = ROW - 1;
  const rotatedBlock: defaltCellProp[][] = [];
  for (let c = 0; c < COL; c++) {
    rotatedBlock[c] = [];
    for (let r = 0; r < ROW; r++) {
      rotatedBlock[c][r] = array[row - r][c];
    }
  }

  return rotatedBlock;
}

export default rotate;
