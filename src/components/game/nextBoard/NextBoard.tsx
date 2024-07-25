import { useRecoilValue } from "recoil";
import { nextAnimalState } from "../../../status/nextAnimals";
import NextBlock from "./NextBlock";

const NextBoard = () => {
  const nextAnimalAry = useRecoilValue(nextAnimalState);

  return (
    <div className="w-full">
      <NextBlock animal={nextAnimalAry[0]} />
      <NextBlock animal={nextAnimalAry[1]} />
      <NextBlock animal={nextAnimalAry[2]} />
    </div>
  );
};

export default NextBoard;
