import { useRecoilState } from "recoil";
import clearFunc from "../features/clearFunc";
import { getBlock } from "../features/getBlock";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useDropFunc = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);

  const dropMove = () => {
    const upgradeBoard = clearFunc(currentBoard);
    const blockMino = getBlock(player, currentBoard);
    const playerX = player.point[1];
    const playerY = player.point[0];

    for (let i = 0; i < player.blockHeight; i++) {
      let isNextDownBlock = true;

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
        upgradeBoard[playerY + i].splice(
          playerX,
          player.blockWidth,
          ...blockMino[i]
        );
        setPlayer({ ...player, isNextMino: true });
      }
    }
    if (!player.isNextMino) {
      setCurrentBoard(upgradeBoard);
    }
  };

  return { dropMove };
};

export default useDropFunc;
