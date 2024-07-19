import { AnimalMino } from "../interface/gameProps";
import { defaultCellFalse, defaultCellTrue } from "./defaultCell";

const catMino = [
  [
    defaultCellTrue("cat01"),
    defaultCellFalse("border"),
    defaultCellTrue("cat02"),
  ],
  [
    defaultCellTrue("cat03"),
    defaultCellTrue("cat04"),
    defaultCellTrue("cat05"),
  ],
  [
    defaultCellTrue("cat06"),
    defaultCellTrue("cat07"),
    defaultCellTrue("cat08"),
  ],
];

const chickenMino = [
  [
    defaultCellFalse("border"),
    defaultCellTrue("chicken01"),
    defaultCellFalse("border"),
  ],
  [
    defaultCellTrue("chicken02"),
    defaultCellTrue("chicken03"),
    defaultCellTrue("chicken04"),
  ],
  [
    defaultCellTrue("chicken05"),
    defaultCellTrue("chicken06"),
    defaultCellTrue("chicken07"),
  ],
  [
    defaultCellTrue("chicken08"),
    defaultCellTrue("chicken09"),
    defaultCellTrue("chicken10"),
  ],
];
const cowMino = [
  [
    defaultCellTrue("cow01"),
    defaultCellTrue("cow02"),
    defaultCellTrue("cow03"),
    defaultCellTrue("cow04"),
    defaultCellTrue("cow05"),
  ],
  [
    defaultCellFalse("border"),
    defaultCellTrue("cow06"),
    defaultCellTrue("cow07"),
    defaultCellTrue("cow08"),
    defaultCellFalse("border"),
  ],
  [
    defaultCellFalse("border"),
    defaultCellTrue("cow09"),
    defaultCellTrue("cow10"),
    defaultCellTrue("cow11"),
    defaultCellFalse("border"),
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
const rabbitMino = [
  [
    defaultCellTrue("rabbit01"),
    defaultCellFalse("border"),
    defaultCellTrue("rabbit02"),
  ],
  [
    defaultCellTrue("rabbit03"),
    defaultCellFalse("border"),
    defaultCellTrue("rabbit04"),
  ],
  [
    defaultCellTrue("rabbit05"),
    defaultCellTrue("rabbit06"),
    defaultCellTrue("rabbit07"),
  ],
  [
    defaultCellTrue("rabbit08"),
    defaultCellTrue("rabbit09"),
    defaultCellTrue("rabbit10"),
  ],
];

export const animalAry = [
  "cat",
  "chicken",
  "cow",
  "elephant",
  "husky",
  "rabbit",
];

export const animalMinos: AnimalMino = {
  cat: catMino,
  chicken: chickenMino,
  cow: cowMino,
  elephant: elephantMino,
  husky: huskyMino,
  rabbit: rabbitMino,
};
