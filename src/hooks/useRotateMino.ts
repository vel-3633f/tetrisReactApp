import { useRecoilState } from "recoil";
import { getSquareBlock } from "../features/getSquareBlock";
import rotate from "../features/rotate";
import { directionContainer } from "../lib/constants/defaultCell";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useRotateMino = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);
  const playerX = player.point[1];
  const playerY = player.point[0];

  const rotateFunc = () => {
    const upgradedBoard = currentBoard.map((row) => [...row]);
    //blackを回転させている
    const squareBlock = getSquareBlock(player, currentBoard);
    const block = rotate(squareBlock);
    let isMove = true;

    //向きを変更
    const rotatedBlock = block.map((ary) => {
      return ary.map((val) => {
        if (val.isOccupied) {
          switch (val.direction) {
            case "rotate-0":
              return { ...val, direction: directionContainer.right };
            case "rotate-90":
              return { ...val, direction: directionContainer.down };
            case "rotate-180":
              return { ...val, direction: directionContainer.left };
            case "-rotate-90":
              return { ...val, direction: directionContainer.up };
          }
        }
        return { ...val };
      });
    });

    for (let i = 0; i < player.blockMaxLength; i++) {
      const nextSideBlock =
        upgradedBoard[playerY + i][playerX + player.blockWidth];
      if (!nextSideBlock) isMove = false;

      if (isMove) {
        upgradedBoard[playerY + i].splice(
          playerX,
          player.blockMaxLength,
          ...rotatedBlock[i]
        );
      }
    }

    if (isMove) {
      setCurrentBoard(upgradedBoard);
      setPlayer({ ...player, isLay: !player.isLay });
    }
  };

  return { rotateFunc };
};

export default useRotateMino;
