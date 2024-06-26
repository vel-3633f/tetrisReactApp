import { useRecoilState } from "recoil";
import clearFunc from "../features/clearFunc";
import { getBlock } from "../features/getBlock";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useSideMove = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);

  const rightSideMove = () => {
    const upgradeBoard = clearFunc(currentBoard);
    const blockMino = getBlock(player, currentBoard);
    for (let i = 0; i < player.blockHeight; i++) {
      upgradeBoard[i].splice(
        player.point[1] + 1,
        player.blockWidth,
        ...blockMino[i]
      );
    }
    const nextPosition = [player.point[0], player.point[1] + 1];
    setPlayer({ ...player, point: nextPosition });
    setCurrentBoard(upgradeBoard);
  };

  const leftSideMove = () => {
    const upgradeBoard = clearFunc(currentBoard);
    const blockMino = getBlock(player, currentBoard);
    for (let i = 0; i < player.blockHeight; i++) {
      upgradeBoard[i].splice(
        player.point[1] - 1,
        player.blockWidth,
        ...blockMino[i]
      );
    }
    const nextPosition = [player.point[0], player.point[1] - 1];
    setPlayer({ ...player, point: nextPosition });
    setCurrentBoard(upgradeBoard);
  };
  return { rightSideMove, leftSideMove };
};

export default useSideMove;
