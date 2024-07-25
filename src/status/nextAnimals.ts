import { atom } from "recoil";
import { animalAry } from "../lib/constants/animalMino";

const nextAnimalAry = [];
for (let i = 0; i < 3; i++) {
  const ramdomAnimalNum = Math.floor(Math.random() * animalAry.length);
  const ramdomAniName = animalAry[ramdomAnimalNum];
  nextAnimalAry.push(ramdomAniName);
}
export const nextAnimalState = atom({
  key: "nextAnimalState",
  default: nextAnimalAry,
});
