import { useRecoilState } from "recoil";
import clearFunc from "../features/clearFunc";
import dropCompFunc from "../features/dropCompFunc";
import { getBlock } from "../features/getBlock";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";
import useCreateMino from "./useCreateMino";
import useRamdomAnimal from "./useRamdomAnimal";

const useDropFunc = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);
  const { createMino } = useCreateMino();
  const { addRamdomAnimal } = useRamdomAnimal();


  const dropMove = () => {
    let upgradeBoard = clearFunc(currentBoard);
    const blockMino = getBlock(player, currentBoard);
    const playerX = player.point[1];
    const playerY = player.point[0];
    let isNextDownBlock = true;

    for (let i = 0; i < player.blockHeight; i++) {
      isNextDownBlock = true;
      if (upgradeBoard[playerY + player.blockHeight] === undefined) {
        isNextDownBlock = false;
      }

      if (isNextDownBlock) {
        upgradeBoard[playerY + i + 1].splice(
          playerX,
          player.blockWidth,
          ...blockMino[i]
        );
      } else {
        upgradeBoard = dropCompFunc(currentBoard);
      }
    }
    const { newMinoBoard } = createMino(upgradeBoard);

    if (!isNextDownBlock) {
      upgradeBoard = newMinoBoard;
      addRamdomAnimal()
      setPlayer({ ...player, isLay: false });
    }
    setCurrentBoard(upgradeBoard);
  };

  return { dropMove };
};

export default useDropFunc;
