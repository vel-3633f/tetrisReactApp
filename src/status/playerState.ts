import { atom } from "recoil";
import { iniPlayer } from "../lib/constants/playerData";

export const playerState = atom({
  key: "playerState",
  default: iniPlayer.data,
});
