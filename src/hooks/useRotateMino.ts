import { useRecoilState } from "recoil";
import { getBlock } from "../features/getBlock";
import { defaltCellProp } from "../lib/interface/gameProps";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useRotateMino = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player, setPlayer] = useRecoilState(playerState);

  const rotateFunc = () => {
    const upgradedBoard = currentBoard.map((row) => [...row]);
    const rotatedBlock = rotate(getBlock(player, currentBoard));
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

  console.log(rotatedBlock)
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
