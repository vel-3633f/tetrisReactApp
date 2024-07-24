import { animalAry, animalMinos } from "../lib/constants/animalMino";
import { defaltCellProp } from "../lib/interface/gameProps";

const useCreateMino = () => {
  const createMino = (currentBoard: defaltCellProp[][]) => {
    const updatedBoard = currentBoard.map((row) => [...row]);
    const ramdomAnimalNum = Math.floor(Math.random() * animalAry.length);
    const ramdomAniName = animalAry[ramdomAnimalNum];
    const aniHeight = animalMinos[ramdomAniName].mino.length;
    const aniWidth = animalMinos[ramdomAniName].mino[0].length;

    for (let i = 0; i < aniHeight; i++) {
      updatedBoard[i].splice(5, aniWidth, ...animalMinos[ramdomAniName].mino[i]);
    }

    return { updatedBoard: updatedBoard };
  };

  return { createMino };
};

export default useCreateMino;
