import { useRecoilState } from "recoil";
import { getSquareBlock } from "../features/getSquareBlock";
import { directionContainer } from "../lib/constants/defaultCell";
import { defaltCellProp } from "../lib/interface/gameProps";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useRotateMino = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);
  const playerX = player.point[1];
  const playerY = player.point[0];
  const nextWidth = player.blockHeight;
  const nextHeight = player.blockWidth;

  const rotateFunc = () => {
    const upgradedBoard = currentBoard.map((row) => [...row]);
    //blackを回転させている
    const block = rotate(getSquareBlock(player, currentBoard));

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

    for (let i = 0; i < player.blockMaxleng; i++) {
      upgradedBoard[playerY + i].splice(
        playerX,
        player.blockMaxleng,
        ...rotatedBlock[i]
      );
    }

    setPlayer({ ...player, blockWidth: nextWidth, blockHeight: nextHeight });
    setCurrentBoard(upgradedBoard);
  };

  return { rotateFunc };
};

export default useRotateMino;

//配列を90度右に回転
function rotate(array: defaltCellProp[][]): defaltCellProp[][] {
  const ROW = array.length;
  const COL = array[0].length;
  const row = ROW - 1;
  const rotatedBlock: defaltCellProp[][] = [];
  for (let c = 0; c < COL; c++) {
    rotatedBlock[c] = [];
    for (let r = 0; r < ROW; r++) {
      rotatedBlock[c][r] = array[row - r][c];
    }
  }

  return rotatedBlock;
}
