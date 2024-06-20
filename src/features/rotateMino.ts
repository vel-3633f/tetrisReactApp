const rotateMino = () => {
  const array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  console.log(rotate(array));
};

export default rotateMino;

//配列を90度右に回転
function rotate(array: number[][]): number[][] {
  const ROW = array.length;
  const COL = array[0].length;
  const row = ROW - 1;
  const a: number[][] = [];
  for (let c = 0; c < COL; c++) {
    a[c] = [];
    for (let r = 0; r < ROW; r++) {
      a[c][r] = array[row - r][c];
    }
  }
  return a;
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
