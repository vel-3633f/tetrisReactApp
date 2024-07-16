import { defaltCellProp, playerProp } from "../lib/interface/gameProps";

export const getBlock = (
  player: playerProp,
  currentBlock: defaltCellProp[][]
) => {
  const cuttedBlock: defaltCellProp[][] = [];

  for (let i = player.point[0]; i < player.point[0] + player.blockHeight; i++) {
    cuttedBlock.push(
      currentBlock[i].slice(
        player.point[1],
        player.point[1] + player.blockWidth
      )
    );
  }

  return cuttedBlock;
};
