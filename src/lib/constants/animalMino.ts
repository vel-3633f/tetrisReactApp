import { defaultCellFalse, defaultCellTrue } from "./defaultCell";

const huskyMino = [
  [
    defaultCellTrue("husky01 rotate-90"),
    defaultCellFalse("border"),
    defaultCellTrue("husky02"),
  ],
  [
    defaultCellTrue("husky03"),
    defaultCellTrue("husky04"),
    defaultCellTrue("husky05"),
  ],
  [
    defaultCellTrue("husky06"),
    defaultCellTrue("husky07"),
    defaultCellTrue("husky08"),
  ],
  [
    defaultCellTrue("husky09"),
    defaultCellTrue("husky10"),
    defaultCellTrue("husky11"),
  ],
];

export const animalMinos = {
  husky: huskyMino,
};
