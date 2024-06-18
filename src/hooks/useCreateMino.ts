import { animalMinos } from "../lib/constants/animalMino";
import { defaltCellProp } from "../lib/interface/gameProps";

const useCreateMino = (currentBoard: defaltCellProp[][]) => {
  const aniRowLength = animalMinos.husky[0].length;
  const aniColLength = animalMinos.husky.length;
  const upgradedBoard = currentBoard.map((row) => [...row]);

  console.log(aniColLength, aniRowLength, animalMinos.husky);
  for (let i = 0; i < aniColLength; i++) {
    upgradedBoard[i].splice(3, 3, ...animalMinos.husky[i]);
  }

  return upgradedBoard;
};

export default useCreateMino;
