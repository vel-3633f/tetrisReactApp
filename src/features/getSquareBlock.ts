import { defaltCellProp, playerProp } from "../lib/interface/gameProps";

export const getSquareBlock = (
  player: playerProp,
  currentBlock: defaltCellProp[][]
) => {
  const cuttedBlock: defaltCellProp[][] = [];
  const playerX = player.point[0];
  const playerY = player.point[1];
  const maxLeng = player.blockMaxLength;

  for (let i = playerX; i < playerX + maxLeng; i++) {
    cuttedBlock.push(currentBlock[i].slice(playerY, playerY + maxLeng));
  }
  return cuttedBlock;
};
