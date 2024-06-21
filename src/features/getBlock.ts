import { defaltCellProp, playerProp } from "../lib/interface/gameProps";

export const getBlock = (
  player: playerProp,
  currentBlock: defaltCellProp[][]
) => {
  const cuttedBlock: defaltCellProp[][] = [];

  for (let i = 0; i < player.blockMaxleng; i++) {
    cuttedBlock.push(
      currentBlock[i].slice(
        player.point[1],
        player.point[1] + player.blockMaxleng
      )
    );
  }
  return cuttedBlock;
};
