import { useRecoilState } from "recoil";
import clearFunc from "../features/clearFunc";
import dropCompFunc from "../features/dropCompFunc";
import { getBlock } from "../features/getBlock";
import { isGameOverCheck } from "../features/isGameOverCheck";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";
import useCheckLine from "./useCheckLine";
import useCreateMino from "./useCreateMino";
import useRamdomAnimal from "./useRamdomAnimal";

const useDropFunc = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);
  const { createMino } = useCreateMino();
  const { addRamdomAnimal } = useRamdomAnimal();
  const { checkLine } = useCheckLine();

  const dropMove = () => {
    let upgradeBoard = clearFunc(currentBoard);
    const blockMino = getBlock(player, currentBoard);
    const playerX = player.point[1];
    const playerY = player.point[0];
    let isNextDownBlock = true;
    const boardLine = upgradeBoard[playerY + player.blockHeight];
    let isGameOver = false;

    if (boardLine === undefined) {
      isNextDownBlock = false;
    } else {
      for (let y = playerY; y < playerY + player.blockHeight; y++) {
        for (let x = playerX; x < playerX + player.blockWidth; x++) {
          const isDrop =
            currentBoard[y][x].isAnimal &&
            currentBoard[y + 1][x].isAnimal &&
            !currentBoard[y + 1][x].isDropped;
          if (isDrop) {
            isNextDownBlock = false;
          }
        }
      }
    }

    if (isNextDownBlock) {
      for (let y = 0; y < player.blockHeight; y++) {
        for (let x = 0; x < player.blockWidth; x++) {
          const nextBlock = currentBoard[playerY + y + 1][playerX + x];
          const currentBlock = currentBoard[playerY + y][playerX + x];
          if (
            nextBlock.isAnimal &&
            !currentBlock.isAnimal &&
            !nextBlock.isDropped
          ) {
            upgradeBoard[playerY + y + 1][playerX + x] =
              currentBoard[playerY + y + 1][playerX + x];
          } else {
            upgradeBoard[playerY + y + 1][playerX + x] = blockMino[y][x];
          }
        }
      }
    } else {
      upgradeBoard = dropCompFunc(currentBoard);
      isGameOver = isGameOverCheck(isGameOver, currentBoard);
      upgradeBoard = checkLine(upgradeBoard);
    }
    const { newMinoBoard } = createMino(upgradeBoard);

    if (!isNextDownBlock) {
      upgradeBoard = newMinoBoard;
      addRamdomAnimal();
      setPlayer({ ...player, isLay: false, isGameOver: isGameOver });
    }
    setCurrentBoard(upgradeBoard);
  };

  return { dropMove };
};

export default useDropFunc;
