import { atom } from "recoil";
import { iniData } from "../lib/constants/tetrisData";

export const blockState = atom<Array<Array<number>>>({
  key: "blockState",
  default: iniData.data,
});
