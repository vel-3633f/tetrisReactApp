import { atom } from "recoil";
import { iniData } from "../lib/constants/defaultBoard";
import { defaltCellProp } from "../lib/interface/gameProps";

export const blockState = atom<Array<Array<defaltCellProp>>>({
  key: "blockState",
  default: iniData.data,
});
