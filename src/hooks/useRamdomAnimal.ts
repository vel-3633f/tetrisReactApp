import { useRecoilState } from "recoil";
import { animalAry } from "../lib/constants/animalMino";
import { nextAnimalState } from "../status/nextAnimals";

const useRamdomAnimal = () => {
  const [nextAnimalAry, setNextAnimalAry] = useRecoilState(nextAnimalState);

  const addRamdomAnimal = () => {
    const newAnimaAry = [...nextAnimalAry];
    const ramdomAnimalNum = Math.floor(Math.random() * animalAry.length);
    const ramdomAniName = animalAry[ramdomAnimalNum];

    newAnimaAry.shift();

    newAnimaAry.push(ramdomAniName);

    console.log(nextAnimalAry);
    setNextAnimalAry(newAnimaAry);
  };

  return { addRamdomAnimal };
};

export default useRamdomAnimal;
