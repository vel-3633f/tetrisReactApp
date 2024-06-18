//board

// 10*30の配列
const defaultCell = {
  isOccupied: false,
  className: "border",
  direction: "up",
};
const rows = 15;
const columns = 10;

const builtRows = Array.from({ length: rows }, () =>
  Array.from({ length: columns }, () => ({ ...defaultCell }))
);

export const iniData = {
  data: builtRows,
};
