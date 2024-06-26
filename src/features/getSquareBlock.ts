import { defaltCellProp, playerProp } from "../lib/interface/gameProps";

export const getSquareBlock = (
  player: playerProp,
  currentBlock: defaltCellProp[][]
) => {
  const cuttedBlock: defaltCellProp[][] = [];

  for (let i = 0; i < 4; i++) {
    cuttedBlock.push(
      currentBlock[i].slice(player.point[1], player.point[1] + 4)
    );
  }
  return cuttedBlock;
};
