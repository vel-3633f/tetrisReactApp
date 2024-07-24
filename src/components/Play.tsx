import { GameScreen } from "./game/GameScreen";
import ScoreAndMode from "./game/ScoreAndMode";
import KeyBoard from "./keyboard/KeyBoard";

const Play = () => {
  return (
    <div className="h-screen w-screen bg-[url('/background/pause.jpg')] bg-cover flex justify-center items-center relative">
      <div className="flex">
        <ScoreAndMode />
        <GameScreen />
        <div className="">
          <KeyBoard />
        </div>
      </div>
    </div>
  );
};

export default Play;
