import { AnimalMino } from "../interface/gameProps";
import { defaultCellTrue } from "./defaultCell";

const catMino = {
  mino: [
    [
      defaultCellTrue("cat01", true),
      defaultCellTrue("border", false),
      defaultCellTrue("cat02", true),
    ],
    [
      defaultCellTrue("cat03", true),
      defaultCellTrue("cat04", true),
      defaultCellTrue("cat05", true),
    ],
    [
      defaultCellTrue("cat06", true),
      defaultCellTrue("cat07", true),
      defaultCellTrue("cat08", true),
    ],
  ],
  width: 3,
  height: 3,
  maxLength: 3,
};

const chickenMino = {
  mino: [
    [
      defaultCellTrue("border", false),
      defaultCellTrue("chicken01", true),
      defaultCellTrue("border", false),
    ],
    [
      defaultCellTrue("chicken02", true),
      defaultCellTrue("chicken03", true),
      defaultCellTrue("chicken04", true),
    ],
    [
      defaultCellTrue("chicken05", true),
      defaultCellTrue("chicken06", true),
      defaultCellTrue("chicken07", true),
    ],
    [
      defaultCellTrue("chicken08", true),
      defaultCellTrue("chicken09", true),
      defaultCellTrue("chicken10", true),
    ],
  ],
  width: 3,
  height: 4,
  maxLength: 4,
};

const cowMino = {
  mino: [
    [
      defaultCellTrue("cow01", true),
      defaultCellTrue("cow02", true),
      defaultCellTrue("cow03", true),
      defaultCellTrue("cow04", true),
      defaultCellTrue("cow05", true),
    ],
    [
      defaultCellTrue("border", false),
      defaultCellTrue("cow06", true),
      defaultCellTrue("cow07", true),
      defaultCellTrue("cow08", true),
      defaultCellTrue("border", false),
    ],
    [
      defaultCellTrue("border", false),
      defaultCellTrue("cow09", true),
      defaultCellTrue("cow10", true),
      defaultCellTrue("cow11", true),
      defaultCellTrue("border", false),
    ],
  ],
  width: 5,
  height: 3,
  maxLength: 5,
};

const elephantMino = {
  mino: [
    [
      defaultCellTrue("elephant01", true),
      defaultCellTrue("elephant02", true),
      defaultCellTrue("elephant03", true),
      defaultCellTrue("elephant04", true),
      defaultCellTrue("elephant05", true),
    ],
    [
      defaultCellTrue("elephant06", true),
      defaultCellTrue("elephant07", true),
      defaultCellTrue("elephant08", true),
      defaultCellTrue("elephant09", true),
      defaultCellTrue("elephant10", true),
    ],
    [
      defaultCellTrue("border", false),
      defaultCellTrue("border", false),
      defaultCellTrue("elephant11", true),
      defaultCellTrue("border", false),
      defaultCellTrue("border", false),
    ],
  ],
  width: 5,
  height: 3,
  maxLength: 5,
};

const huskyMino = {
  mino: [
    [
      defaultCellTrue("husky01", true),
      defaultCellTrue("border", false),
      defaultCellTrue("husky02", true),
    ],
    [
      defaultCellTrue("husky03", true),
      defaultCellTrue("husky04", true),
      defaultCellTrue("husky05", true),
    ],
    [
      defaultCellTrue("husky06", true),
      defaultCellTrue("husky07", true),
      defaultCellTrue("husky08", true),
    ],
    [
      defaultCellTrue("husky09", true),
      defaultCellTrue("husky10", true),
      defaultCellTrue("husky11", true),
    ],
  ],
  width: 3,
  height: 4,
  maxLength: 4,
};

const rabbitMino = {
  mino: [
    [
      defaultCellTrue("rabbit01", true),
      defaultCellTrue("border", false),
      defaultCellTrue("rabbit02", true),
    ],
    [
      defaultCellTrue("rabbit03", true),
      defaultCellTrue("border", false),
      defaultCellTrue("rabbit04", true),
    ],
    [
      defaultCellTrue("rabbit05", true),
      defaultCellTrue("rabbit06", true),
      defaultCellTrue("rabbit07", true),
    ],
    [
      defaultCellTrue("rabbit08", true),
      defaultCellTrue("rabbit09", true),
      defaultCellTrue("rabbit10", true),
    ],
  ],
  width: 3,
  height: 4,
  maxLength: 4,
};

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
