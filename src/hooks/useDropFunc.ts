import { useRecoilState } from "recoil";
import clearFunc from "../features/clearFunc";
import { getBlock } from "../features/getBlock";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useDropFunc = () => {
  const dropTime = 1500;

  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player] = useRecoilState(playerState);

  const dropMove = () => {
    const upgradeBoard = clearFunc(currentBoard);
    const blockMino = getBlock(player, currentBoard);
    const playerX = player.point[1];
    const playerY = player.point[0];

    for (let i = 0; i < player.blockHeight; i++) {
      upgradeBoard[playerY + i + 1].splice(
        playerX,
        player.blockWidth,
        ...blockMino[i]
      );
    }

    console.log(player.point)

    setCurrentBoard(upgradeBoard);
  };

  return { dropMove, dropTime };
};

export default useDropFunc;
