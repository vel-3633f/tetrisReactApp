import { nextAnimalProps } from "../../../lib/interface/gameProps";

const NextBlock = ({ animal }: nextAnimalProps) => {
  return (
    <div className="w-[85px] ml-5 mb-2 relative">
      <img
        src="/background/button/game/icon-next.png"
        alt="animalNext"
      />
      <div className="absolute top-1/2 left-1/2 w-[45px] -translate-x-1/2 -translate-y-1/2">
        <img src={`/animalImg/${animal}/${animal}.jpg`} alt="animal" />
      </div>
    </div>
  );
};

export default NextBlock;
