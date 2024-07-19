import { animalAry, animalMinos } from "../lib/constants/animalMino";
import { defaltCellProp } from "../lib/interface/gameProps";
import usePlayerUpdate from "./usePlayerUpdate";

const useCreateMino = () => {
  const { playerUpdateFunc } = usePlayerUpdate();

  const createMino = (currentBoard: defaltCellProp[][]) => {
    const upgradedBoard = currentBoard.map((row) => [...row]);
    const ramdomAnimalNum = Math.floor(Math.random() * animalAry.length);
    const ramdomAniName = animalAry[ramdomAnimalNum];
    const aniHeight = animalMinos[ramdomAniName].length;
    const aniWidth = animalMinos[ramdomAniName][0].length;

    playerUpdateFunc(aniWidth, aniHeight);
    for (let i = 0; i < aniHeight; i++) {
      upgradedBoard[i].splice(5, aniWidth, ...animalMinos[ramdomAniName][i]);
    }

    return upgradedBoard;
  };

  return { createMino };
};

export default useCreateMino;
