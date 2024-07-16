import { defaultCellFalse, defaultCellTrue } from "./defaultCell";

const huskyMino = [
  [
    defaultCellTrue("husky01"),
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

const elephantMino = [
  [
    defaultCellTrue("elephant01"),
    defaultCellTrue("elephant02"),
    defaultCellTrue("elephant03"),
    defaultCellTrue("elephant04"),
    defaultCellTrue("elephant05"),
  ],
  [
    defaultCellTrue("elephant06"),
    defaultCellTrue("elephant07"),
    defaultCellTrue("elephant08"),
    defaultCellTrue("elephant09"),
    defaultCellTrue("elephant10"),
  ],
  [
    defaultCellFalse("border"),
    defaultCellFalse("border"),
    defaultCellTrue("elephant11"),
    defaultCellFalse("border"),
    defaultCellFalse("border"),
  ],
];

export const animalMinos = {
  husky: huskyMino,
  elephant: elephantMino,
};
