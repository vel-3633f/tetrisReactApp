import { animalMinos } from "../lib/constants/animalMino";
import { defaltCellProp } from "../lib/interface/gameProps";

const createMino = (currentBoard: defaltCellProp[][]) => {
  const upgradedBoard = currentBoard.map((row) => [...row]);
  const aniColLength = animalMinos.husky.length;

  for (let i = 0; i < aniColLength; i++) {
    upgradedBoard[i].splice(6, 3, ...animalMinos.husky[i]);
  }

  return upgradedBoard;
};

export default createMino;
