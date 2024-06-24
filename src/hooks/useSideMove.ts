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
    for (let i = 0; i < player.blockMaxleng; i++) {
      upgradeBoard[i].splice(
        player.point[1] + 1,
        player.blockMaxleng,
        ...blockMino[i]
      );
    }
    console.log(player);
    const nextPosition = [player.point[0], player.point[1] + 1];
    setPlayer({ ...player, point: nextPosition });
    setCurrentBoard(upgradeBoard);
  };
  
  const leftSideMove = () => {
    console.log("left");
  };
  return { rightSideMove, leftSideMove };
};

export default useSideMove;
