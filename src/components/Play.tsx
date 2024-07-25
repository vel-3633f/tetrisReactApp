import { GameScreen } from "./game/GameScreen";
import KeyBoard from "./game/keyboard/KeyBoard";
import NextBoard from "./game/nextBoard/NextBoard";
import ScoreAndMode from "./game/ScoreAndMode";

const Play = () => {
  return (
    <div className="h-screen w-screen bg-[url('/background/pause.jpg')] bg-cover flex justify-center items-center relative">
      <div className="flex">
        <ScoreAndMode />
        <GameScreen />
        <div className="flex flex-col justify-between items-end w-[250px] ">
          <NextBoard />
          <KeyBoard />
        </div>
      </div>
    </div>
  );
};

export default Play;
