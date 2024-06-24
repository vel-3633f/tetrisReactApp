import { useRecoilState } from "recoil";
import { getBlock } from "../features/getBlock";
import { directionContainer } from "../lib/constants/defaultCell";
import { defaltCellProp } from "../lib/interface/gameProps";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useRotateMino = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player] = useRecoilState(playerState);

  const rotateFunc = () => {
    const upgradedBoard = currentBoard.map((row) => [...row]);
    const block = rotate(getBlock(player, currentBoard));

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
        return {...val}
      });
    });

    for (let i = 0; i < player.blockMaxleng; i++) {
      upgradedBoard[i].splice(3, 4, ...rotatedBlock[i]);
    }
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
  //向きを変更する

  return rotatedBlock;
}

// 参考
// export const rotate = ({ piece, direction }) => {
//   // Transpose rows and columns
//   const newPiece = piece.map((_, index) =>
//     piece.map((column) => column[index])
//   );

//   // Reverse rows to get a rotated matrix
//   if (direction > 0) return newPiece.map((row) => row.reverse());

//   return newPiece.reverse();
// };
