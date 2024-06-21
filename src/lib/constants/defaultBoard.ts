import { defaultCellFalse } from "./defaultCell";
// 10*30の配列

const rows = 20;
const columns = 15;

const builtRows = Array.from({ length: rows }, () =>
  Array.from({ length: columns }, () => ({ ...defaultCellFalse("border") }))
);

export const iniData = {
  data: builtRows,
};
