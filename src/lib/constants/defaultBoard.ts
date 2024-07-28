import { defaultCellFalse } from "./defaultCell";
// 10*30の配列

export const boardSize = [15, 20];

export const builtRows = Array.from({ length: boardSize[1] }, () =>
  Array.from({ length: boardSize[0] }, () => ({
    ...defaultCellFalse("border"),
  }))
);

export const iniData = {
  data: builtRows,
};
