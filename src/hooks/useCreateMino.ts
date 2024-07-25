import { useRecoilValue } from "recoil";
import { animalMinos } from "../lib/constants/animalMino";
import { defaltCellProp } from "../lib/interface/gameProps";
import { nextAnimalState } from "../status/nextAnimals";

const useCreateMino = () => {
  const nextAnimalAry = useRecoilValue(nextAnimalState);
  const createMino = (currentBoard: defaltCellProp[][]) => {
    const updatedBoard = currentBoard.map((row) => [...row]);
    const ramdomAniName = nextAnimalAry[0];
    const aniHeight = animalMinos[ramdomAniName].mino.length;
    const aniWidth = animalMinos[ramdomAniName].mino[0].length;

    for (let i = 0; i < aniHeight; i++) {
      updatedBoard[i].splice(
        5,
        aniWidth,
        ...animalMinos[ramdomAniName].mino[i]
      );
    }

    return { newMinoBoard: updatedBoard };
  };

  return { createMino };
};

export default useCreateMino;
