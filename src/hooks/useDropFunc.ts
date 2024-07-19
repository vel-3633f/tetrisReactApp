import { useRecoilState } from "recoil";
import clearFunc from "../features/clearFunc";
import dropCompFunc from "../features/dropCompFunc";
import { getBlock } from "../features/getBlock";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useDropFunc = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);

  const dropMove = () => {
    let upgradeBoard = clearFunc(currentBoard);
    const blockMino = getBlock(player, currentBoard);
    const playerX = player.point[1];
    const playerY = player.point[0];

    for (let i = 0; i < player.blockHeight; i++) {
      let isNextDownBlock = true;

      if (upgradeBoard[playerY + player.blockHeight] === undefined) {
        isNextDownBlock = false;
      }
      if (!isNextDownBlock) {
        dropCompFunc(currentBoard);
      }
      if (isNextDownBlock) {
        upgradeBoard[playerY + i + 1].splice(
          playerX,
          player.blockWidth,
          ...blockMino[i]
        );
      } else {
        upgradeBoard = dropCompFunc(currentBoard);
        setPlayer({ ...player, isNextMino: true });
      }
    }
    setCurrentBoard(upgradeBoard);
  };

  return { dropMove };
};

export default useDropFunc;
